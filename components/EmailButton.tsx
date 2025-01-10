"use client";
import { CopyIcon } from "@radix-ui/react-icons";
import { useToast } from "@/hooks/use-toast";

const EmailButton = () => {
  const { toast } = useToast();
  const copyToKeyboard = () => {
    navigator.clipboard
      .writeText("vrishank@vrishank.net")
      .catch((err) => console.error("Failed to copy email: ", err));
    toast({
      title: "Email Copied!",
      description: "Please reach out to connect and chat.",
    });
  };
  return (
    <button
      onClick={copyToKeyboard}
      className="flex-1 rounded-sm bg-bunker-950"
    >
      <div className="flex items-center justify-between gap-4 rounded-sm bg-bunker-800/10 px-4 py-2 font-[family-name:var(--codeFont)] text-sm md:text-base">
        <span>vrishank@vrishank.net</span>
        <CopyIcon className="size-4" />
      </div>
    </button>
  );
};

export default EmailButton;
