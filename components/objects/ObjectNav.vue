<template>
    <div class="object__nav">
      <ul>
        <li :class="active == '#about-object' ? 'active' : ''" @click="$emit('changeActive', '#about-object')">
          Об объекте
        </li>
        <li :class="active == '#choice-apartment' ? 'active' : '' " @click="$emit('changeActive','#choice-apartment')">
          Выбор квартиры
        </li>
        <li :class="active == '#construction-progress' ? 'active' : '' " @click="$emit('changeActive','#construction-progress')">
          Ход строительства
        </li>
        <li :class="active == '#documentation' ? 'active' : '' " @click="$emit('changeActive','#documentation')">
          Документация
        </li>
        <li :class="active == '#about-developer' ? 'active' : '' " @click="$emit('changeActive','#about-developer')">
          О застройщике
        </li>
        <li :class="active == '#cont' ? 'active' : '' " @click="$emit('changeActive','#cont')">
          Контакты
        </li>
      </ul>
    </div>
</template>

<script>
	export default {
	  props : ['active'],
		name: "object-nav"
	}
</script>

<style>

</style>
