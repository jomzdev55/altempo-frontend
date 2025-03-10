import Text from "../atoms/Text";

interface LoadProps {
  title?: string;
  description?: string;
  loading: boolean;
}

const Load = ({ description, loading, title }: LoadProps) => {
  if (!loading) return null;

  return (
    <div className="load">
      <div className="load__content p-5">
        {title && (
          <Text
            weight="bold"
            color="accent"
            size="heading2"
            family="montserrat"
            align="center"
          >
            {title}
          </Text>
        )}
        <div className="loading-container">
          <div className="loading"></div>
        </div>
        {description && (
          <Text weight="extraLight" align="center">
            {description}
          </Text>
        )}
      </div>
    </div>
  );
};

export default Load;
