<template>

</template>

<script>
import { add } from "@/api/api.js"
export default {
	data() {
		return {
			
		};
	},
	mounted() {
		let data = {
			num:'2'
		}
		add(data).then(res => {
			
		}).catch(err => {
			console.log(err);
		});
	}
};
</script>

