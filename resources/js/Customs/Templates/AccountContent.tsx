import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Addresses, IAccounts } from "@/types/accounts";
import { useEffect, useState } from "react";
import { ThemesStyle } from "../Themes/Themes-Style";

interface AccountsProps {
    identifier?: string
    data: IAccounts
}

export function AccountContent(props: AccountsProps) {

    const { identifier, data } = props;
    const [dataInfo, setDataInfo] = useState<IAccounts>(data);
    const [addresses, setAddresses] = useState<Addresses[]>(dataInfo.addresses?.length === 0 ? [{ name: "", id: 0 }, { name: "", id: 1 }] : dataInfo.addresses ?? [{ name: "", id: 0 }]);

    useEffect(() => {
        if (addresses.length < 2) {
            setAddresses((prevAddresses) => [...prevAddresses, { name: '', id: 1 }]);
        }
    }, [addresses]);

    function onChangeHandler(name?: string, indx?: number) {
        const updatedAddresses = addresses.map((address) =>
            address.id === indx ? { ...address, name } : address
        );
        setAddresses(updatedAddresses);
        setDataInfo((prevData) => ({ ...prevData, addresses: updatedAddresses }));
    }
    const onChangeAccountHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        setDataInfo((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <div className="grid gap-2">
            <div className="grid grid-cols-3 gap-2">
                <div className="grid items-center col-span-1 gap-2">
                    <Label htmlFor="code">Code</Label>
                    <Input value={dataInfo.code || ''} onChange={onChangeAccountHandler}
                        type="text"
                        name="code"
                        className="h-8 focus:border-transparent focus:ring-0"
                        id={identifier + '-code'} placeholder="Code" />
                </div>
                <div className="grid col-span-2 gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input value={dataInfo.name || ''} onChange={onChangeAccountHandler} className="h-8 focus:border-transparent focus:ring-0" id={identifier + '-name'} name="name" placeholder="Name" />
                </div>
            </div>
            
            <div className="grid grid-cols-1 gap-2">
                {addresses.map((address, index: number) => {
                    return (
                        <div className="grid items-center gap-2">
                            <Label htmlFor={"address-line" + (index + 1)}>Address Line {index + 1}</Label>
                            <Input value={address.name || ''} key={index} onChange={(e) => onChangeHandler(e.target.value, index)} className="h-8 focus:border-transparent focus:ring-0" id={identifier + '-address-line' + (index + 1)} type="text" placeholder={`Address Line ${(index + 1)}`} />
                        </div>
                    )
                })}
            </div>

            <div className="grid grid-cols-3 gap-2">
                <div className="grid gap-2">
                    <Label htmlFor="city">City</Label>
                    <Input value={dataInfo.city || ''} onChange={onChangeAccountHandler} name="city" className="h-8 focus:border-transparent focus:ring-0" id={identifier + '-city'} placeholder="City" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="state">State</Label>
                    <Input value={dataInfo.state || ''} onChange={onChangeAccountHandler} name="state" className="h-8 focus:border-transparent focus:ring-0" id={identifier + '-state'} placeholder="State" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="zip">Zip</Label>
                    <Input value={dataInfo.zip || ''} onChange={onChangeAccountHandler} name="zip" className="h-8 focus:border-transparent focus:ring-0" id={identifier + '-zip'} placeholder="Zip" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
                <div className="grid gap-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input value={dataInfo.phone || ''} onChange={onChangeAccountHandler} name="phone" className="h-8 focus:border-transparent focus:ring-0" id={identifier + 'contact-number'} placeholder="Phone#" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="contact">Contact</Label>
                    <Input value={dataInfo.contact || ''} onChange={onChangeAccountHandler} name="contact" className="h-8 focus:border-transparent focus:ring-0" id={identifier + 'contact-name'} placeholder="Contact Name" />
                </div>
            </div>
        </div>
    )
}