import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type DisplayErrorProps = {
  title?: string;
  content?: string;
};

const DisplayError = ({ title="Error", content="An error has occurred." }: DisplayErrorProps) => {
  return (
    <Alert variant="destructive" className="max-w-[420px]">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{content}</AlertDescription>
    </Alert>
  );
};

export default DisplayError;
