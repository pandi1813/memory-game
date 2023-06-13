interface ImageInfo {
    src: string;
    alt?: string;
}

export default function ImageComponent({src, alt = 'character image'}:ImageInfo){
  return (
    <img src={src} alt={alt}/>
  )
}

