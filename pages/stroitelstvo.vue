<template>
    <div class="container">
		<div class="section section-image" style="background-image: url(img/technadzor.jpg)">
			<div class="content">
				<div class="content__left">
					<h1 class="content__title">Строительство:</h1>
					<div class="content__text">
						<div class="el1" v-bar style="height: 460px;">
        					<div class="el2">
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reprehenderit sequi pariatur, deserunt exercitationem illum esse veniam modi facere ea unde eum saepe aut in nesciunt doloremque, corporis veritatis officia!</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reprehenderit sequi pariatur, deserunt exercitationem illum esse veniam modi facere ea unde eum saepe aut in nesciunt doloremque, corporis veritatis officia!</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reprehenderit sequi pariatur, deserunt exercitationem illum esse veniam modi facere ea unde eum saepe aut in nesciunt doloremque, corporis veritatis officia!</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reprehenderit sequi pariatur, deserunt exercitationem illum esse veniam modi facere ea unde eum saepe aut in nesciunt doloremque, corporis veritatis officia!</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reprehenderit sequi pariatur, deserunt exercitationem illum esse veniam modi facere ea unde eum saepe aut in nesciunt doloremque, corporis veritatis officia!</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reprehenderit sequi pariatur, deserunt exercitationem illum esse veniam modi facere ea unde eum saepe aut in nesciunt doloremque, corporis veritatis officia!</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reprehenderit sequi pariatur, deserunt exercitationem illum esse veniam modi facere ea unde eum saepe aut in nesciunt doloremque, corporis veritatis officia!</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reprehenderit sequi pariatur, deserunt exercitationem illum esse veniam modi facere ea unde eum saepe aut in nesciunt doloremque, corporis veritatis officia!</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reprehenderit sequi pariatur, deserunt exercitationem illum esse veniam modi facere ea unde eum saepe aut in nesciunt doloremque, corporis veritatis officia!</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reprehenderit sequi pariatur, deserunt exercitationem illum esse veniam modi facere ea unde eum saepe aut in nesciunt doloremque, corporis veritatis officia!</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reprehenderit sequi pariatur, deserunt exercitationem illum esse veniam modi facere ea unde eum saepe aut in nesciunt doloremque, corporis veritatis officia!</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reprehenderit sequi pariatur, deserunt exercitationem illum esse veniam modi facere ea unde eum saepe aut in nesciunt doloremque, corporis veritatis officia!</p>
        					
							</div>
						</div>
					</div>
				</div>
				<div class="content__right">
					<div class="info info_red">
						<h3>Возведение каркаса здания</h3>
						<span>от</span> <b>12000</b> <span>руб</span>
					</div>
					<div class="info info_darkred">
						<h3>Комплекс строительно-<br/>монтажных работ</h3>
						<span>от</span> <b>25000</b> <span>руб</span>
					</div>
					<div class="info info_blue">
						<a href="#">
							Сертификат на обследование <br/>
							зданий и сооружений АЕ №000452 <br/>
							от 23.07.2012г.
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="section section_pad">
			<h2 class="section__title">Наши объекты</h2>
			<div class="list__content">
				<div class="list__block" v-for="(item, index) in objects" :key="index">
					<h3 class="list__title">
						{{item.name}}
					</h3>
					<div class="list__images">
						<img :src="val.image" :alt="val.description" v-for="(val, k) in item.items" :key="k">
					</div>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default {
		name: "stroitelstvo",
		head() {
			return {
				title: 'Строительство'
			}
		},
		data() {
			return {
				objects : [
					{
						name: 'Многоквартирный жилой дом в г. Севастополе по пр. Античный',
						id: 1,
						items: [
							{
								image: '/img/bg-index.jpg',
								description: 'Описание картинки'
							},
							{
								image: '/img/bg-index.jpg',
								description: 'Описание картинки'
							},
							{
								image: '/img/bg-index.jpg',
								description: 'Описание картинки'
							},
							{
								image: '/img/bg-index.jpg',
								description: 'Описание картинки'
							},
							{
								image: '/img/bg-index.jpg',
								description: 'Описание картинки'
							},
							{
								image: '/img/bg-index.jpg',
								description: 'Описание картинки'
							},
							{
								image: '/img/bg-index.jpg',
								description: 'Описание картинки'
							},
							{
								image: '/img/bg-index.jpg',
								description: 'Описание картинки'
							}
						]
					},
					{
						name: 'Кофейня "Шоколадница" в гостинице Севастополь',
						id: 2,
						items: [
							{
								image: '/img/bg-index.jpg',
								description: 'Описание картинки'
							},
							{
								image: '/img/bg-index.jpg',
								description: 'Описание картинки'
							},
							{
								image: '/img/bg-index.jpg',
								description: 'Описание картинки'
							},
							{
								image: '/img/bg-index.jpg',
								description: 'Описание картинки'
							}
						]
					}
				]
			}
		}
	}
</script>

<style>

</style>