<template>
    <div class="container">
		<div class="section section-image section-objects objects objects_right" style="background-image: url(img/bg-index.jpg)">
			<div class="objects__right">
				<nuxt-link to="objects/residential">
						<h2>Жилые <br/>объекты</h2>
					</nuxt-link>
			</div>
		</div>
		<div class="section section-image objects objects_left" style="background-image: url(img/bg-index.jpg)">
			<div class="objects__left">
				<nuxt-link to="objects/commercial">
					<h2>Коммерческие <br/>объекты</h2>
				</nuxt-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "objects",
		head() {
			return {
				title: 'Объекты'
			}
		},
	}
</script>

<style>

</style>