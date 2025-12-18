import Logo from "@/app/components/logo";
import TextParallaxContentExample from "@/app/components/textParallaxContent";

export default function giaAgency() {
  return (
    <>
      <Logo />
      <TextParallaxContentExample />
      <p>xxxx</p>
      <img
        src="/projects/gia-masthead.webp"
        alt="Gia Agency Project Image"
        width={"100%"}
        height={100}
      />
      <div className="container mx-auto max-w-4xl">
        <p>
          'Design-and-build' 1-page WordPress websites for a friend who wanted
          to promote her small agency.
        </p>
      </div>
    </>
  );
}
