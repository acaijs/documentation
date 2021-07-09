// Containers
import Highlight	from "../../../../components/Highlight";

// Modules
import useLocalization from "../../../../modules/Localization";

const Tester = () => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const _ = useLocalization("docs.tester");
	
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<>
			<h1>{_("TESTER")}</h1>
			<p>{_("TEXT_01")}</p>

			<h3>{_("TITLE_01")}</h3>

			<p>{_("TEXT_02")}</p>

			<Highlight language="typescript">
{`
import test from "@acai/tester";

test("Test that 2 + 2 is equal 4", expect => {
	expect(2 + 2).toEqual(4);
});

// ${_("COMMENT_01")}
test.run();
`}
			</Highlight>

			<h3>{_("TITLE_02")}</h3>

			<p>{_("TEXT_03")}</p>

			<h3>{_("TITLE_03")}</h3>

			<p>{_("TEXT_04")}</p>

			<Highlight language="typescript">
{`
import test from "@acai/tester";

test.group("Group description", () => {
    /*Your tests here*/ 
});
`}
			</Highlight>

			<h3>{_("TITLE_04")}</h3>

			<p>{_("TEXT_05")}</p>

			<Highlight language="typescript">
{`
import test from "@acai/tester";

test.only("test description", () => {
   // Your test here 
});
`}
			</Highlight>

			<p>{_("TEXT_06")}</p>

			<h3>{_("TITLE_05")}</h3>

			<p>{_("TEXT_07")}</p>

			<Highlight language="typescript">
{`
import test from "@acai/tester";

test("test description", () => {
   // Your test here 
}).tag(["tag1", "tag2"]);

test("other test description", () => {
   // Your test here 
}).tag(["tag3"]);

// Will only run tests marked with the tag2 tag
await test.run(["tag2"]);
`}
			</Highlight>
		</>
	);
};

export default Tester;
