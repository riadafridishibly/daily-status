import { Button } from "../ui/button";
import { Input } from "../ui/input";

function AddTimeEntry() {
	// an input box
	// a plus icon
	// onAdd()
	return (
		<div className="flex w-full items-center space-x-2 ">
			<Input className="h-12" type="text" placeholder="Working on foobar..." />
			<Button className="h-12 px-8 cursor-pointer" type="submit">
				Add
			</Button>
		</div>
	);
}

export default AddTimeEntry;
