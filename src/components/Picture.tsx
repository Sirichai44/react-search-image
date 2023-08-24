
interface PictureProps {
  data: {
    cover_photo: {
      urls: {
        small: string;
      };
      description: string ;
    };
    
  };
}

const Picture = (props: PictureProps) => {
  // {console.log(props.data)}
  return (
    <>
      <img src={props.data.cover_photo.urls.small} alt={props.data.cover_photo.description} />
    </>
  );
};

export default Picture;
