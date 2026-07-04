import { Container } from "../common/container";
import { Logo } from "./logo";
import { NavLink } from "./nav-link";
import {navigation} from "../../data/navigation"
import { Button } from "../ui/button";


export function Navbar(){

    return(
        <header className=" border-b sticky top-0 z-50 bg-white/80  backdrop-blur ">
            <Container className="flex h-20 items-center justify-between ">
                <Logo/>
                <nav className=" hidden items-center gap-8 lg:flex">
                    {navigation.map((item)=>(
                        <NavLink
                            key={item.href}
                            href={item.href}
                        >
                            {item.title}

                        </NavLink>
                    ))}

                </nav>
                <div>
                    <Button className="hidden items-center gap-4 lg:flex">
                        Get Free Consultation
                    </Button>
                </div>
                <Button className="lg:hidden"> 
                    <menu className="h-7 w-7"/>

                </Button>
            </Container>
        </header>
        
       
    )
}