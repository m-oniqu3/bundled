import { LogoIcon } from "@/components/icons";

type Props = {
  className?: string;
};

function Logo(props: Props) {
  const { className = "" } = props;

  return (
    <div>
      <LogoIcon className={className} />
    </div>
  );
}

export default Logo;
