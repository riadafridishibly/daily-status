import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AddTimeEntry from "./add-time";

import {
	Calendar,
	ChevronLeft,
	ChevronRight,
	CircleStop,
	Play,
} from "lucide-react";

export function RootLayout() {
	return (
		<Tabs defaultValue="daily-status">
			<TabsList className="grid w-full grid-cols-2 h-14">
				<TabsTrigger value="daily-status" className="h-full">
					Daily Status
				</TabsTrigger>
				<TabsTrigger value="time-log" className="h-full">
					Time Log
				</TabsTrigger>
			</TabsList>
			<TabsContent value="daily-status">
				<Card>
					<CardHeader>
						<CardTitle>Account</CardTitle>
						<CardDescription>
							Make changes to your account here. Click save when you're done.
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-2">
						<div className="space-y-1">
							<Label htmlFor="name">Name</Label>
							<Input id="name" defaultValue="Pedro Duarte" />
						</div>
						<div className="space-y-1">
							<Label htmlFor="username">Username</Label>
							<Input id="username" defaultValue="@peduarte" />
						</div>
					</CardContent>
					<CardFooter>
						<Button>Save changes</Button>
					</CardFooter>
				</Card>
			</TabsContent>
			<TabsContent value="time-log">
				<Card>
					<CardHeader>
						<CardTitle>Timelog</CardTitle>
						<CardDescription>Add or remove time log here</CardDescription>
					</CardHeader>
					<CardContent className="space-y-2">
						<div className="flex items-center justify-center">
							<div className="flex p-4 rounded-2xl gap-4 shadow mb-8">
								<Calendar />
								<ChevronLeft />
								18 Aug 2024
								<ChevronRight />
							</div>
						</div>
						<AddTimeEntry />
						<div>
							<div className="pt-8 pb-2">
								<p className="text-sm text-gray-500">Currently working on...</p>
							</div>
							<CurrentlyWorkingOn />
							{/* TODO: make a component out of this! */}
							<div className="pt-8 pb-2">List of other time logs here...</div>
							<div className="flex flex-col gap-1">
								<TimeLogEntry title="Watch youtube..." totalTime="1h20m" />
								<TimeLogEntry title="Read gutenberg..." totalTime="40m" />
							</div>
						</div>
					</CardContent>
				</Card>
			</TabsContent>
		</Tabs>
	);
}

function CurrentlyWorkingOn() {
	return (
		<div className="flex items-center gap-2 py-2 border rounded shadow px-2">
			<CircleStop
				strokeWidth={1.8}
				className="h-4 w-4 text-red-600 opacity-80"
			/>
			<span className="flex-1">Migrate application to ts...</span>
			<span className="text-sm italic text-muted-foreground">
				Started at 12:40am
			</span>
			<span>12h40m</span>
		</div>
	);
}

type TimelogEntryProps = {
	title: string;
	totalTime: string;
	started?: string;
};

function TimeLogEntry({ title, totalTime, started }: TimelogEntryProps) {
	return (
		<div className="flex items-center gap-2 py-2 border rounded shadow-sm px-2 hover:bg-gray-200 cursor-pointer">
			<Play strokeWidth={1.8} className="h-4 w-4 text-green-700 opacity-80" />
			<span className="flex-1">{title}</span>
			{started && (
				<span className="text-sm italic text-muted-foreground">
					Started at 12:40am
				</span>
			)}
			<span>{totalTime}</span>
		</div>
	);
}
