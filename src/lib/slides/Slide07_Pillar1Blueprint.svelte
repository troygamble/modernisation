<script>
	import { fade } from 'svelte/transition';
</script>

<section in:fade={{ duration: 420 }} out:fade={{ duration: 220 }} class="deck-abs-center deck-fade deck-rise deck-flow-in">
	<div class="deck-block">
		<div class="deck-wide">
			<div class="deck-subtle">Pillar 1: Tactical Blueprint</div>
			<div class="deck-title-md">The "First 30 Days" Governance Uplift</div>
			<div class="deck-body-sm deck-mute deck-hint mb-md">
				Moving from concept to execution: The specific artefacts and rules we will implement.
			</div>

			<div class="two-col">
				<div class="col">
					<div class="mini-label">Standards & Definitions</div>
					<ul class="pill-list">
						<li class="pill"><span class="pill-strong">The PMP Uplift:</span> Formal Project Management Plans for every engagement.</li>
						<li class="pill"><span class="pill-strong">RACI Definition:</span> Hard-coded roles for who approves, who supports, and who delivers.</li>
						<li class="pill"><span class="pill-strong">Commercial Change Control:</span> A zero-tolerance financial process for scope creep.</li>
						<li class="pill"><span class="pill-strong">Pre-Validation:</span> Engineering leads must validate schedules before customer submission.</li>
					</ul>
				</div>
				<div class="col">
					<div class="mini-label">Cadence & Control</div>
					<ul class="pill-list">
						<li class="pill"><span class="pill-strong">RAID Logs:</span> Active tracking of Risks, Assumptions, Issues, and Dependencies.</li>
						<li class="pill"><span class="pill-strong">Meeting Compression:</span> Replacing "roundtable updates" with exception-based reporting to recover delivery hours.</li>
						<li class="pill"><span class="pill-strong">Lessons Learned:</span> A closed loop where project failures update the templates.</li>
						<li class="pill"><span class="pill-strong">Status Reports:</span> Clear "Red/Amber/Green" separating noise from executive action.</li>
					</ul>
				</div>
			</div>
			
			<div class="mandate-quote-card mt-md" style="font-size: 0.95rem;">
				Outcome: We eliminate problems early. We increase project capacity, professionalism, and ensure robust and accurate reporting.
			</div>
		</div>
	</div>
</section>

