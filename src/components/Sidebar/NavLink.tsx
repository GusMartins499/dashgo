import { Icon, Link, Text, LinkProps as chakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";

interface INavLinkProps extends chakraLinkProps {
  icon: ElementType;
  children: String;
}

export function NavLink({ icon, children, ...rest }: INavLinkProps) {
  return (
    <Link display='flex' {...rest}>
      <Icon as={icon} fontSize='20' />
      <Text ml='4' fontWeight='medium'>{children}</Text>
    </Link>
  )
}