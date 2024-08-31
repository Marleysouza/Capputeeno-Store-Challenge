import { Cabecalho, Logo, SearchBar, SearchButton, SearchInput } from "@/app/style";
import { BagIcon, SearchIcon } from "@/assets/iconsSvg";
import { Saira_Stencil_One } from "next/font/google";

const sairastencil = Saira_Stencil_One({
    weight: ["400"],
    subsets: ["latin"]
});


const Header = () => {
    return (
        <Cabecalho>
            <Logo className={sairastencil.className}>Capputeeno</Logo>
            <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
                <SearchBar>
                    <SearchInput placeholder="teste" />
                    <SearchButton>
                        <SearchIcon />
                    </SearchButton>
                </SearchBar>
                <BagIcon />
            </div>
        </Cabecalho>
    )
}

export default Header