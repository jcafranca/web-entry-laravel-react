import React, { useEffect, useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/Components/ui/resizable";
import { AccountContent } from "@/Customs/Templates/AccountContent";
import FooterContent from "@/Customs/Templates/FooterContent";
import { HeaderContent } from "@/Customs/Templates/HeaderContent";
import { ImageViewerContent } from "@/Customs/Templates/ImageViewerContent";
import ContainerLayout from "@/Layouts/ContainerLayout";
import { IAccounts } from "@/types/accounts";
import { IReferences } from "@/types/references";
import { BillingInformation } from "@/types/class/billing-information";
import { ReferencesContent } from "@/Customs/Templates/ReferencesContent";
import { Skeleton } from "@/Components/ui/skeleton";
import { SkeletonFormLoading, SkeletonImageLoading, SkeletonSingleLoading } from "@/Customs/Templates/SkeletonLoading";
import { Separator } from "@/Components/ui/separator";
import { ThemesStyle } from "@/Customs/Themes/Themes-Style";
import { cn } from "@/lib/utils";
import { Button } from "@/Components/ui/button";
import { router } from "@inertiajs/react";

export default function Home() {

    // Example data for initialization
    const initialAccounts: { accounts: IAccounts[] } = {
        accounts: [
            {
                code: '123',
                name: 'John Doe',
                addresses: [{ name: '123 Main St', id: 0 }],
                city: 'New York',
                state: 'NY',
                zip: '10001',
                phone: '555-1234',
                contact: 'Jane Doe',
            },
            {
                code: '456',
                name: 'Jane Smith',
                addresses: [{ name: '456 Elm St', id: 0 }],
                city: 'Los Angeles',
                state: 'CA',
                zip: '90001',
                phone: '555-5678',
                contact: 'John Smith',
            },
            {
                code: '456',
                name: 'Jane Smith',
                addresses: [{ name: '456 Elm St', id: 0 }],
                city: 'Los Angeles',
                state: 'CA',
                zip: '90001',
                phone: '555-5678',
                contact: 'John Smith',
            },
        ]
    }

    const initialReferences: IReferences = {
        pronumber: "12345678",
        bolnumber: "",
        ponumber: "",
        line: "",
        cube: "",
        hzmt: 0,
        pcs: 0,
        book: "",
        plist: "",
        mbo: "",
        wgt: 0,
        mq: "",
        payment: "",
        msd: "",
        delv_begin: "",
        delv_end: "",
        opn: "",
        clse: ""
    }

    const [loading, setLoading] = useState(true); // Loading state
    const requestData = new BillingInformation(initialAccounts.accounts, initialReferences);
    // Ref to hold the current request_data
    const dataRef = useRef(requestData);

    // Update the ref whenever request_data changes
    useEffect(() => {
        dataRef.current = requestData;
    }, [requestData]);

    useEffect(() => {
        // Simulate a delay to mimic data fetching
        const fetchData = setTimeout(() => {
            setLoading(false);
        }, 2000); // 2 seconds delay

        return () => clearTimeout(fetchData); // Cleanup function
    }, []);

    return (
        <ContainerLayout title="Home">
            <ThemesStyle />
            <div className="flex flex-col h-screen themes-wrapper bg-background sm:gap-4 sm:py-4 sm:pl-14">
                <HeaderContent title="Home" subtitle="Your data entry start here." />
                <main className="w-full px-6 h-5/6">
                    <ResizablePanelGroup direction="horizontal" className="border rounded-lg">
                        <ResizablePanel defaultSize={35} minSize={35}>
                            <div className="grid p-6">
                                <span className="pb-4 font-semibold">Image Viewer</span>
                                <div className="h-full p-4 border rounded-md">
                                    {loading ? (<SkeletonImageLoading />) : (<ImageViewerContent
                                        image_path={`${route("images")}/image_2024_08_06T06_37_23_750Z.png`}
                                        filename="temp.jpg" />)}
                                </div>
                            </div>
                        </ResizablePanel>
                        <ResizableHandle withHandle />
                        <ResizablePanel defaultSize={65} minSize={50}>
                            <div className="grid w-full h-full gap-4 p-6 overflow-y-auto scrollbar-hide">
                                <span className="font-semibold">Billing Information</span>
                                {/* {/ Accounts Section /} */}
                                <div className="flex flex-col flex-wrap w-full gap-4 accounts-wrapper sm:flex-row">
                                    {/* {/ Consignee Section /} */}
                                    <div className="grid flex-1 w-full">
                                        <Card x-chunk="accounts-01-chunk-2" className="border-none shadow-none">
                                            <CardHeader className="px-0 pt-0">
                                                <CardTitle className="text-sm">Consignee</CardTitle>
                                            </CardHeader>
                                            <CardContent className="p-0">
                                                {loading ? (
                                                    <SkeletonFormLoading />
                                                ) : (
                                                    <AccountContent
                                                        identifier="billto"
                                                        data={requestData.accounts[0]}
                                                    />
                                                )}
                                            </CardContent>
                                        </Card>
                                    </div>

                                    {/* {/ Shipper Section /} */}
                                    <div className="grid flex-1 w-full">
                                        <Card x-chunk="accounts-02-chunk-2" className="border-none shadow-none">
                                            <CardHeader className="px-0 pt-0">
                                                <CardTitle className="text-sm">Shipper</CardTitle>
                                            </CardHeader>
                                            <CardContent className="p-0">
                                                {loading ? (
                                                    <SkeletonFormLoading />
                                                ) : (
                                                    <AccountContent identifier="shipper" data={requestData.accounts[1]} />
                                                )}
                                            </CardContent>
                                        </Card>
                                    </div>

                                    {/* {/ Bill To Section /} */}
                                    <div className="grid flex-1 w-full">
                                        <Card x-chunk="accounts-03-chunk-2" className="border-none shadow-none">
                                            <CardHeader className="px-0 pt-0">
                                                <CardTitle className="text-sm">Bill To</CardTitle>
                                            </CardHeader>
                                            <CardContent className="p-0">
                                                {loading ? (
                                                    <SkeletonFormLoading />
                                                ) : (<AccountContent identifier="billto" data={requestData.accounts[2]} />
                                                )}
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>

                                {/* {/ References Section /} */}
                                <div className="grid flex-1 w-full gap-6">
                                    <Card x-chunk="entry-01-chunk-2">
                                        <CardHeader>
                                            <CardTitle className="text-sm">References</CardTitle>
                                        </CardHeader>
                                        <CardContent className="grid gap-4">
                                            {loading ? (<SkeletonFormLoading />) : (
                                                <ReferencesContent data={requestData.references} />)}
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* {/ Instructions Section /} */}
                                <div className="grid flex-1 w-full gap-6">
                                    <Card x-chunk="entry-02-chunk-2">
                                        <CardHeader>
                                            <CardTitle className="text-sm">Instructions</CardTitle>
                                        </CardHeader>
                                        <CardContent className="grid gap-4">
                                            {loading ? (<SkeletonSingleLoading />) : null}
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* {/ Items Section /} */}
                                <div className="grid flex-1 w-full gap-6">
                                    <Card x-chunk="entry-03-chunk-2">
                                        <CardHeader>
                                            <CardTitle className="text-sm">Items</CardTitle>
                                        </CardHeader>
                                        <CardContent className="grid gap-4">
                                            {loading ? (<SkeletonSingleLoading />) : null}
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </ResizablePanel>
                    </ResizablePanelGroup>
                </main>
                <FooterContent />
            </div>

        </ContainerLayout>
    )
}