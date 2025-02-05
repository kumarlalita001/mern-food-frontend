import { Loader } from "lucide-react";

const LoaderRounded = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-6 h-6 animate-spin">
        <Loader />
      </div>
    </div>
  );
};

export default LoaderRounded;
