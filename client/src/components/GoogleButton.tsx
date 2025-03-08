import Button from "@/components/Button";
import { GoogleIcon } from "@/components/icons";

type Props = {
  callback: () => void;
};

function GoogleButton(props: Props) {
  const { callback } = props;

  return (
    <Button
      type="button"
      className="bg-white text-black border border-zinc-100 w-full flex items-center justify-center"
      onClick={callback}
    >
      <GoogleIcon className="size-5" />
      <span className="w-full"> Continue with Google</span>
    </Button>
  );
}

export default GoogleButton;
