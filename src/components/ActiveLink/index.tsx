import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";


interface isActiveLink extends LinkProps {
  children: ReactElement;
  matchExactHref?: boolean; 
}

export function ActiveLink({
  children,
  matchExactHref = false,
  ...rest
}: isActiveLink) {

  const { asPath } = useRouter();

  let isActive = false;

  if(matchExactHref && (asPath === rest.href || asPath === rest.as)){
    isActive = true;
  }

  if(!matchExactHref &&
     (asPath.startsWith(String(rest.href)) ||
      asPath.startsWith(String(rest.as)))){
    isActive = true;
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'green.900' : 'green.500'
      })}
    </Link>
  )
}