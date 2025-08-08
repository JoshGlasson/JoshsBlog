<script>
	import { onMount } from 'svelte';
	import PizZip from "pizzip";
  	import Docxtemplater from "docxtemplater";
  	import { saveAs } from "file-saver";

	export let title = "Uppermill Building Services Quote Builder";

	onMount( async () => {
		const params = {
			name: "", 
			address: "", 
			message: ""
		}

		function formatDate(dateStr) {
			if (!dateStr) return '';
			const [year, month, day] = dateStr.split('-');
			return `${day}-${month}-${year}`;
		}

		const today = new Date();
    	const dateString = today.toISOString().substring(0, 10); // "YYYY-MM-DD"

		var submit = document.getElementById("submit");
		// Disables enter submitting the input field as a form
		submit.onkeypress = function(e) {
			var key = e.charCode || e.keyCode || 0;     
			if (key == 13) {
				e.preventDefault();
			};
		};
		submit.addEventListener('click', function(event){
			generateDoc();
		});

		async function setVal(key) {
			var input = document.getElementById(key);

			input.value = "";
			input.addEventListener('input', function(event){
				params[key] = input.value;
			});
		}

		for (var key in params) {
			setVal(key);
		}

		async function generateDoc() {
			params.date = formatDate(dateString)
			try {
				const response = await fetch("/template.docx");
				const arrayBuffer = await response.arrayBuffer();
				const zip = new PizZip(arrayBuffer);
				const doc = new Docxtemplater(zip, { linebreaks: true });

				console.log(params);
				doc.render(params);

				const blob = doc.getZip().generate({
					type: "blob",
					mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
				});

				const file = new File([blob], `${params.name}.docx`, {
					type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
				});

				saveAs(file);
			} catch (err) {
				console.error("Error generating document:", err);
				alert("Failed to generate document. See console for details.");
			}
		}
	})
</script>

<style></style>

<svelte:head>
    <title>{title}</title>
	<meta name="description" content="My personal blog about Software Development, Sports, Music, and any more of my hobbies!">
	<meta name="twitter:card" content="summary">
	<meta name="twitter:site" content="@joshglasson" />
	<meta name="twitter:creator" content="@joshglasson" />
	<meta property="og:title" content="Josh's Blog">
	<meta property="og:image" content="https://joshglasson.co.uk/logo.png">
	<meta property="og:description" content="My personal blog about Software Development, Sports, Music, and any more of my hobbies!">
	<meta property="og:url" content="https://joshglasson.co.uk/">
</svelte:head>

<head>
  <title>Generate Docx from Template</title>
</head>

<h1 id=header>{title}</h1>



<input id="name" type="text" placeholder="Name">

<br>

<textarea id="address" placeholder="Address"></textarea>

<br>

<textarea id="message" placeholder="Message"></textarea>

<br>

<button id="submit" type="submit">Generate Word Doc</button>