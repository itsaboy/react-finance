import spinner2 from "../../assets/spinner2.svg";

export default function LoadingOverlay() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center px-4 py-5 sm:p-6 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-80 bg-gray-800 rounded-lg">
        <img src={spinner2} className="h-24" />
    </div>
  );
}
