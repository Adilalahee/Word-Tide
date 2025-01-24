"use client"
 
import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const Navbar = () => {
  return(
    <NavigationMenu>
  <NavigationMenuList>
  <NavigationMenuItem>
    <Link href="/docs" legacyBehavior passHref>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        Documentation
      </NavigationMenuLink>
    </Link>
  </NavigationMenuItem>
  <NavigationMenuItem>
    <Link href="/docs" legacyBehavior passHref>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        Documentation
      </NavigationMenuLink>
    </Link>
  </NavigationMenuItem>
  <NavigationMenuItem>
    <Link href="/docs" legacyBehavior passHref>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        Documentation
      </NavigationMenuLink>
    </Link>
  </NavigationMenuItem>
  <NavigationMenuItem>
    <Link href="/docs" legacyBehavior passHref>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        Documentation
      </NavigationMenuLink>
    </Link>
  </NavigationMenuItem>
  </NavigationMenuList>
    </NavigationMenu>

  )
}

export default Navbar