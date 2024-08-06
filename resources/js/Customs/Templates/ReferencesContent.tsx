import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { IReferences } from "@/types/references";
import { useState } from "react";


interface ReferencesProps {
    data: IReferences
}

export function ReferencesContent(props: ReferencesProps) {

    const { data } = props;
    const [dataInfo, setDataInfo] = useState<IReferences>(data)
    const onChangeAccountHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        setDataInfo((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <div className="grid gap-2">
            <div className="grid grid-cols-3 gap-2">
                <div className="grid col-span-1 gap-2">
                    <Label htmlFor="pro">PRO Number</Label>
                    <Input value={data?.pronumber} type="text" className="h-8 focus:border-transparent focus:ring-0" placeholder="Pronumber" />
                </div>
                <div className="grid col-span-1 gap-2">
                    <Label htmlFor="pro">B/L Number</Label>
                    <Input value={""} type="text" className="h-8 focus:border-transparent focus:ring-0" placeholder="Pronumber" />
                </div>
                <div className="grid col-span-1 gap-2">
                    <Label htmlFor="pro">Po Number</Label>
                    <Input value={""} type="text" className="h-8 focus:border-transparent focus:ring-0" placeholder="Pronumber" />
                </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
                <div className="grid col-span-1 gap-2">
                    <Label htmlFor="pro">Linearft</Label>
                    <Input value={""} type="text" className="h-8 focus:border-transparent focus:ring-0" placeholder="Pronumber" />
                </div>
                <div className="grid col-span-1 gap-2">
                    <Label htmlFor="pro">Cube</Label>
                    <Input value={""} type="text" className="h-8 focus:border-transparent focus:ring-0" placeholder="Pronumber" />
                </div>
                <div className="grid col-span-1 gap-1.5">
                    <Label htmlFor="pro">Hazmat No.</Label>
                    <Input value={""} type="text" className="h-8 focus:border-transparent focus:ring-0" placeholder="Pronumber" />
                </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
                <div className="grid col-span-1 gap-2">
                    <Label htmlFor="pro">PCS</Label>
                    <Input value={""} type="text" className="h-8 focus:border-transparent focus:ring-0" placeholder="Pronumber" />
                </div>
                <div className="grid col-span-1 gap-2">
                    <Label htmlFor="pro">Book</Label>
                    <Input value={""} type="text" className="h-8 focus:border-transparent focus:ring-0" placeholder="Pronumber" />
                </div>
                <div className="grid col-span-1 gap-2">
                    <Label htmlFor="pro">PList</Label>
                    <Input value={""} type="text" className="h-8 focus:border-transparent focus:ring-0" placeholder="Pronumber" />
                </div>
                <div className="grid col-span-1 gap-2">
                    <Label htmlFor="pro">MBO</Label>
                    <Input value={""} type="text" className="h-8 focus:border-transparent focus:ring-0" placeholder="Pronumber" />
                </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
                <div className="grid col-span-1 gap-2">
                    <Label htmlFor="pro">Weight</Label>
                    <Input value={""} type="text" className="h-8 focus:border-transparent focus:ring-0" placeholder="Pronumber" />
                </div>
                <div className="grid col-span-1 gap-2">
                    <Label htmlFor="pro">MQ</Label>
                    <Input value={""} type="text" className="h-8 focus:border-transparent focus:ring-0" placeholder="Pronumber" />
                </div>
                <div className="grid col-span-1 gap-2">
                    <Label htmlFor="pro">Payment*</Label>
                    <Input value={""} type="text" className="h-8 focus:border-transparent focus:ring-0" placeholder="Pronumber" />
                </div>
                <div className="grid col-span-1 gap-2">
                    <Label htmlFor="pro">MSED</Label>
                    <Input value={""} type="text" className="h-8 focus:border-transparent focus:ring-0" placeholder="Pronumber" />
                </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
                <div className="grid col-span-1 gap-2">
                    <Label htmlFor="pro">Delivery Begin</Label>
                    <Input value={""} type="text" className="h-8 focus:border-transparent focus:ring-0" placeholder="Pronumber" />
                </div>
                <div className="grid col-span-1 gap-2">
                    <Label htmlFor="pro">Delivery End</Label>
                    <Input value={""} type="text" className="h-8 focus:border-transparent focus:ring-0" placeholder="Pronumber" />
                </div>
                <div className="grid col-span-1 gap-2">
                    <Label htmlFor="pro">Open</Label>
                    <Input value={""} type="text" className="h-8 focus:border-transparent focus:ring-0" placeholder="Pronumber" />
                </div>
                <div className="grid col-span-1 gap-2">
                    <Label htmlFor="pro">Close</Label>
                    <Input value={""} type="text" className="h-8 focus:border-transparent focus:ring-0" placeholder="Pronumber" />
                </div>
            </div>
        </div>
    )
}