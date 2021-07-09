// Packages
import axios from "axios";

// References
const packages = [
	"query", "validator", "server", "model", "router", "stubber", "utils", "config", "testing"
];

export default async function calculateTotalDownloads () {
	let count = 0;

	for (let i = 0; i < packages.length; i++) {
		const pack 		= packages[i];
		const r 		= await axios.get(`https://api.npms.io/v2/package/%40acai%2F${pack}`);

		count += r.data.collected.npm.downloads[r.data.collected.npm.downloads.length - 1].count;
	}

	return count;
}