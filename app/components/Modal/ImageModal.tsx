import React from 'react';
import { Project as ProjectType } from '../Project/types';
import Image from 'next/image';

interface ImageModalProps {
  imageModalProject: ProjectType;
  setShowImageModal: React.Dispatch<React.SetStateAction<boolean>>;
  showImageModal: boolean;
  imageModalSrc: number;
  setImageModalSrc: React.Dispatch<React.SetStateAction<number>>;
}

const ImageModal: React.FC<ImageModalProps> = ({ 
  imageModalProject, 
  setShowImageModal, 
  showImageModal, 
  imageModalSrc, 
  setImageModalSrc 
}) => {

  const handleImgChange = (dir: "fwd" | "bwd") => {
    const totalImages = imageModalProject.imgs.length - 1;

    if (dir === "fwd") {
      if (imageModalSrc === totalImages) {
        setImageModalSrc(0);
      } else {
        setImageModalSrc(imageModalSrc + 1);
      }
    } else {
      if (imageModalSrc === 0) {
        setImageModalSrc(totalImages);
      } else {
        setImageModalSrc(imageModalSrc - 1);
      }
    }
  };

  return (
    <>
      <div className={`modal-page w-[100vw] min-h-[100vh] max-h-[100vh] fixed flex justify-center items-center overflow-hidden z-10 ${showImageModal ? "openModalPage" : "closeModalPage"}`}>
        <div className={`modal-container bg-[#0c0c0c] max-w-[80vw] min-w-[80vw] max-h-[80vh] min-h-[80vh] flex justify-center items-center fixed bottom-[-2000px] translate-y-[50%] z-30 transition-all ease-in duration-500 ${showImageModal ? "openModalContainer" : "closeModalContainer"}`}>
          {/* CLOSE ICON */}
          <i onClick={() => setShowImageModal(false)} className="fa-solid fa-circle-xmark fa-2xl absolute -top-8 right-0 md:-right-24 z-40 cursor-pointer transition-all ease-in duration-150 opacity-70 hover:opacity-100 text-red-600"></i>
          {/* ARROW LEFT */}
          <div  onClick={() => handleImgChange("bwd")} className='arrow-left pointer-events-auto absolute z-50 -left-6 md:-left-20 text-[#ccc] top-[50%] translate-y-[-50%] cursor-pointer opacity-60 hover:opacity-100 scale-[2]'></div>
          {/* ARROW RIGHT */}
          <div  onClick={() => handleImgChange("fwd")} className='arrow-right pointer-events-auto absolute z-50 -right-6 md:-right-20 text-[#ccc] top-[50%] translate-y-[-50%] cursor-pointer opacity-60 hover:opacity-100 scale-[2]'></div>
       
          {/* IMAGE */}
          {showImageModal && (
              <Image className='object-cover max-w-[80vw] min-w-[80vw] max-h-[80vh]'
                src={typeof imageModalProject.imgs[imageModalSrc].src === 'string' 
                  ? imageModalProject.imgs[imageModalSrc].src 
                  : imageModalProject.imgs[imageModalSrc].src
                }
                alt="ModalImage"
              />
              
            )}
            {/* IMAGE COUNT */}
            <div className='absolute -bottom-10 text-[#ccc] opacity-65 text-xl font-bold'>
            {imageModalSrc + 1} /{" "}
            {imageModalProject.imgs !== undefined
            ? imageModalProject.imgs.length
            : 0}
            </div>
            <div  onClick={() => setShowImageModal(false)} className={`modal-background bg-[#0a0a0abf] backdrop-blur-sm w-[100vw] min-h-[100vh] max-h-[100vh] relative transition-all ease-in duration-500 flex justify-center items-center overflow-hidden z-10 ${showImageModal ? "openModalBg" : "closeModalBg"}`}>
            </div>
        </div>
      </div>
    </>
  );
};

export default ImageModal;
