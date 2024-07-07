import { Button } from "@chakra-ui/react";

const MainButton = ({
  rightIcon,
  children,
  colorScheme,
}: {
  rightIcon:
    | React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>>
    | undefined;
  children: React.ReactNode;
  colorScheme: (string & unknown) | undefined;
}) => {
  return (
    <Button
      rightIcon={rightIcon}
      colorScheme={colorScheme}
      borderRadius="60px"
      padding="10px 20px"
      alignItems="center"
    >
      {children}
    </Button>
  );
};

export default MainButton;
