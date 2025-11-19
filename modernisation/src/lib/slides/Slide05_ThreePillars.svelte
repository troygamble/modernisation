<script>
	import { fade, slide } from 'svelte/transition';
</script>

<section in:slide={{ duration: 420 }} out:fade={{ duration: 220 }} class="deck-abs-center">
	<div class="deck-block">
		<div class="deck-wide">
			<div class="deck-subtle">Structural answer</div>
			<div class="deck-title-lg">Three Pillars for Strategic Maturity</div>
			<div class="pillar-grid">
				<div class="pillar-card">
					<div class="pillar-icon">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
					</div>
					<div class="pillar-tag">Pillar 1</div>
					<div class="pillar-title">Governance & PMO uplift</div>
					<div class="pillar-sub">Create a predictable engine room.</div>
					<ul class="pillar-list">
						<li class="pill">Standard PMO templates and language</li>
						<li class="pill">Clear RACI and escalation paths</li>
						<li class="pill">Delivery cadence aligned to executives</li>
					</ul>
				</div>
				<div class="pillar-card accent">
					<div class="pillar-icon">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
					</div>
					<div class="pillar-tag">Pillar 2</div>
					<div class="pillar-title">Automation & Modernisation</div>
					<div class="pillar-sub">Increase capacity without adding headcount.</div>
					<ul class="pillar-list">
						<li class="pill">Process mapping and SPOF removal</li>
						<li class="pill">Modernising core business systems</li>
						<li class="pill">Data-driven efficiency gains</li>
					</ul>
				</div>
				<div class="pillar-card">
					<div class="pillar-icon">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9.5a4 4 0 1 1 0 5.2" /><path d="M2 12h12" /><path d="m18 12 4-4" /><path d="m18 12 4 4" /></svg>
					</div>
					<div class="pillar-tag">Pillar 3</div>
					<div class="pillar-title">Commercialisation</div>
					<div class="pillar-sub">Convert capability into revenue.</div>
					<ul class="pillar-list">
						<li class="pill">SMB automation packages</li>
						<li class="pill">Co-pilot integration patterns</li>
						<li class="pill">Developing a go-to-market strategy</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

