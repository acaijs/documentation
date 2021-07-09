// Containers
import Highlight	from "../../../../components/Highlight";

// Modules
import useLocalization from "../../../../modules/Localization";

const Query = () => {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const _ = useLocalization("docs.query");
	
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<>
			<h1>{_("QUERY")}</h1>

			<p>{_("TEXT_01")}</p>

			<h3>{_("TITLE_01")}</h3>

			<ul>
				<li><input type="checkbox" disabled checked /> MySQL</li>
				<li><input type="checkbox" disabled /> PostgreSQL</li>
				<li><input type="checkbox" disabled /> mongo</li>
				<li><input type="checkbox" disabled /> sqlite</li>
			</ul>

			<h3>{_("TITLE_02")}</h3>

			<p>{_("TEXT_02")}</p>

			<Highlight language="typescript">
{`
import query, { setDefault, addQuery } 	from "@acai/query";

// ${_("COMMENT_01")}
await addQuery("secondary", "sql", { /* sql config */ });
const sqlquery = query("secondary");

// ${_("COMMENT_02")}
await setDefaultQuery("pg", {
	/* ${_("COMMENT_03")} */
});

// ${_("COMMENT_04")}
const pgquery = query(); // <-- ${_("COMMENT_05")}
`}
			</Highlight>

			<h3>{_("TITLE_03")}</h3>

			<p>{_("TEXT_03")}</p>

			<Highlight language="typescript">
{`
import query from "@acai/query";

const results = await query().table("people").where("id", 5).get(["name", "age"]);
`}
			</Highlight>

			<p>{_("TEXT_04")}</p>

			<Highlight language="typescript">
{`
await query().table("people").where("id", 5).where("name", "Robert").get();

// ${_("COMMENT_06")}:
// SELECT FROM people WHERE id = 5 AND name = Robert

await query().table("people").where("id", 2).orWhere("name", "Robert").get();

// ${_("COMMENT_06")}:
// SELECT FROM people WHERE id = 5 OR name = Robert
`}
			</Highlight>

			<h3>{_("TITLE_04")}</h3>

			<Highlight language="typescript">
{`
import query from "@acai/query";

await query().table("people").insert({
    name	: "John",
    surname	: "Doe",
    age		: 32,
});
`}
			</Highlight>

			<h3>{_("TITLE_05")}</h3>

			<Highlight language="typescript">
{`
import query from "@acai/query";

await query().table("people").where("id", 5).update({
    name: "John"
});
`}
			</Highlight>

			<h3>{_("TITLE_06")}</h3>

			<Highlight language="typescript">
{`
import query from "@acai/query";

await query().table("people").where("id", 5).delete();
`}
			</Highlight>
		</>
	);
};

export default Query;
