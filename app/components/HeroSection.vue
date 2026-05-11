<template>
	<section class="min-h-screen flex flex-col justify-end pb-16 md:pb-32">
		<div class="relative flex-1 flex items-end">
			<BackgroundDots />
			<BaseHeading
				level="h1"
				class="pb-8 md:pb-16 pr-6 bg-background after:content-[''] after:inline-block after:size-4 md:after:size-6 after:bg-primary"
			>
				Filip<br>Vepřík
			</BaseHeading>
		</div>
		<hr class="text-border mb-8 md:mb-16">
		<div class="grid md:grid-cols-3">
			<TypeWriter
				class="text-muted text-lg col-span-2 lg:col-span-1"
				text="Dokážu vycentrovat div na první pokus. Píšu kód, kterému sám rozumím i po půl roce. Vymyslím smysluplný název proměnné do 5 vteřin. A k tomu dělám skvělé weby."
			/>
			<div
				class="lg:col-span-2 flex mt-4 md:mt-0 md:justify-end items-center gap-4"
			>
				<BaseButton href="#o-mne">
					O mně
				</BaseButton>
				<BaseButton
					href="#kontakt"
					variant="ghost"
				>
					Kontakt
				</BaseButton>
			</div>
		</div>
	</section>
</template>
