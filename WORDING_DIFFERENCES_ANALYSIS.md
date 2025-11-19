# Wording Differences Analysis
## Comparison between uplift_check.md and Current Project Files

This document identifies all wording differences between the strategic content in `uplift_check.md` and the current committed versions of the Svelte slide files. These changes are strategically important for psychological and messaging impact.

---

## Slide01_Vision.svelte

### Line 8: Subtitle (deck-subtle)
- **Current:** "Origin of Strategy"
- **Target:** "Origin of Strategy"
- **Status:** ✅ MATCH

### Line 9: Title (deck-title-lg)
- **Current:** "Delivering the \"V3\" Vision"
- **Target:** "Delivering the \"V3\" Vision"
- **Status:** ✅ MATCH

### Lines 14-18: Main body content (deck-body-lg and deck-body-sm)
- **Current:**
  ```
  We have discussed the need to move beyond the V2 MSP model. The goal is to identify bottlenecks, optimise workflows, and build a company capable of scaling efficiently.
  ```
  ```
  This aligns with previous internal efforts to map friction points and workflows.
  ```

- **Target:**
  ```
  This plan answers the specific directive to evolve beyond the V2 MSP model. You identified that internal bottlenecks are currently the primary constraint on our ability to scale.
  ```
  ```
  It operationalises the insights from previous executive sessions regarding process friction and efficiency.
  ```

- **Status:** ❌ MISMATCH
- **Analysis:** Current version is passive ("We have discussed"). Target version is direct and attributes ownership ("You identified"), making it more personal and acknowledging leadership's role.

### Lines 21-23: Quote card content
- **Current:**
  ```
  This plan is the direct technical answer to those initiatives. It is designed to free up executive time for high-level strategy by creating a self-correcting delivery engine.
  ```

- **Target:**
  ```
  This is the execution strategy for that vision. It provides the structural answer to the friction points identified by leadership, designed to free up executive time for high-level strategy.
  ```

- **Status:** ❌ MISMATCH
- **Analysis:** Target emphasizes "execution strategy" and "structural answer" rather than "technical answer". Also adds "identified by leadership" for ownership attribution.

---

## Slide02_Credentials.svelte

### Line 8: Title (deck-title-lg)
- **Current:** "Why this specific skillset fits the problem"
- **Target:** "The Required Capability Mix"
- **Status:** ❌ MISMATCH
- **Analysis:** Target version is more authoritative and less defensive. Shifts from justification ("why this fits") to statement of fact ("the required mix").

### Lines 9-10: Hint text (deck-body-sm deck-mute deck-hint)
- **Current:**
  ```
  This plan relies on a unique intersection of formal governance training and deep technical engineering.
  ```

- **Target:**
  ```
  Success requires a leader who speaks both the language of the Boardroom and the Engineer.
  ```

- **Status:** ❌ MISMATCH
- **Analysis:** Target version is more powerful—emphasizes dual fluency and leadership rather than just technical skills.

### Lines 28-29: Pillar 2 & 3 description (deck-body-md)
- **Current:**
  ```
  A proven history of building enterprise-grade software and secure infrastructure.
  ```

- **Target:**
  ```
  Strategic oversight of high-stakes technical initiatives and secure infrastructure environments.
  ```

- **Status:** ❌ MISMATCH
- **Analysis:** Target shifts from "history of building" to "strategic oversight", emphasizing leadership over hands-on development.

### Lines 32-35: Pillar 2 & 3 pills
- **Current:**
  - "Full-stack Software Development"
  - "Deep AI & Automation Knowledge"

- **Target:**
  - "Technical Architecture & Integration Strategy"
  - "Applied AI & Process Automation Strategy"

- **Status:** ❌ MISMATCH
- **Analysis:** Target version emphasizes architecture and strategy over development, positioning for a leadership role.

---

## Slide03_StrategicArc.svelte

### Line 8: Title (deck-title-lg)
- **Current:** "From Legacy Provider to Modern Partner"
- **Target:** "Transformation to Technology Leadership"
- **Status:** ❌ MISMATCH
- **Analysis:** Critical change. "Legacy" implies criticism of current state. Target version is neutral and aspirational, focusing on where we're going rather than what's wrong now.

---

## Slide04_SystemState.svelte

### Line 9: Title (deck-title-lg)
- **Current:** "Why the system cannot self-correct"
- **Target:** "The Structural Barrier to Scale"
- **Status:** ❌ MISMATCH
- **Analysis:** Target version is less negative. Shifts from "cannot self-correct" (implies broken) to "barrier to scale" (implies growth opportunity).

### Line 20: Internal Initiatives subtitle (lane-sub)
- **Current:** "Siloed work · No central priority · Duplicated effort"
- **Target:** "Competing priorities · Duplicated effort"
- **Status:** ❌ MISMATCH
- **Analysis:** Target version is more concise and less accusatory. Removes "No central priority" which could be read as leadership failure.

---

## Slide05_ThreePillars.svelte

### Line 33: Pillar 2 second bullet point
- **Current:** "Modernising core business systems"
- **Target:** "Optimising tool utilization & workflow integration"
- **Status:** ❌ MISMATCH
- **Analysis:** Target version is more specific about what "modernization" means, avoiding vague language.

### Line 46: Pillar 3 second bullet point
- **Current:** "Co-pilot integration patterns"
- **Target:** "Product-Led Services integration patterns"
- **Status:** ❌ MISMATCH
- **Analysis:** Target uses more professional terminology that's less tool-specific.

---

## Slide06_Snapshot.svelte

### Line 14: SVG viewBox
- **Current:** `viewBox="0 0 900 400"`
- **Target:** `viewBox="0 0 960 420"`
- **Status:** ❌ MISMATCH
- **Analysis:** Technical adjustment for visual consistency.

### Lines 16-22: SVG line coordinates
- **Current:** Uses percentage-based coordinates
- **Target:** Uses absolute pixel coordinates with updated values
- **Status:** ❌ MISMATCH
- **Analysis:** Cleaner visual presentation with "spokes" pattern. Includes comments noting "Updated coordinates to create cleaner 'spokes'".

---

## Slide07_Pillar1Blueprint.svelte

### Line 20: Third bullet point title
- **Current:** "Scope & Change Control:"
- **Target:** "Commercial Change Control:"
- **Status:** ❌ MISMATCH
- **Analysis:** "Commercial" emphasizes the business/financial aspect, making it more strategic.

### Line 28: Second bullet point in Cadence & Control
- **Current:** "Meeting Agendas: Standardised outcomes, actions, and minutes for all delivery meetings."
- **Target:** "Meeting Compression: Replacing \"roundtable updates\" with exception-based reporting to recover delivery hours."
- **Status:** ❌ MISMATCH
- **Analysis:** Target version is much stronger—emphasizes efficiency gains and time recovery, not just standardization.

---

## Slide08_GovernanceCadence.svelte

### Lines 13-23: Rhythm & Reporting section (entire section restructured)
- **Current:**
  - "Weekly: Project Health & Blocker Removal"
  - "Fortnightly: PMO Governance Board"
  - "Monthly: Portfolio Status (Exec)"

- **Target:**
  - "Continuous: Scope & Risk Monitoring" (NEW - with accent border)
  - "Weekly: Blocker Removal"
  - "Monthly: Portfolio Status (Exec)"

- **Status:** ❌ MISMATCH
- **Analysis:** Major strategic change. Adds "Continuous" monitoring with emphasis (accent border), removes "Fortnightly" governance board, simplifies weekly focus. Shows constant vigilance.

### Line 33: Escalation node label
- **Current:** "Program Director (Single Point)"
- **Target:** "Director - Programs (Escalation)"
- **Status:** ❌ MISMATCH
- **Analysis:** Clarifies the role's title and emphasizes escalation function.

---

## Slide09_PortfolioControl.svelte

### Lines 11-12: Description
- **Current:** "A single source of truth for all internal change."
- **Target:** "A single source of truth ensuring resources are deployed only against validated priorities."
- **Status:** ❌ MISMATCH
- **Analysis:** Target version is more specific about the governance benefit—resource allocation control.

### Lines 13-30: Entire Kanban board structure
- **Current:** Uses Svelte `{#each}` loop with dynamic data
- **Target:** Static HTML with detailed breakdown including "Capture", "Executive Review", "Execution", "Closure" subtitles and specific examples

- **Status:** ❌ MAJOR STRUCTURAL MISMATCH
- **Analysis:** Complete redesign. Target provides much more detail with subtitles for each column and specific examples of what goes in each stage. Includes CSS for styling.

---

## Slide10_Pillar2Engine.svelte

### Line 10: Description
- **Current:** "We will deploy a continuous discovery process to build a pipeline of improvements."
- **Target:** "We will deploy a continuous discovery process to build a safe, prioritised pipeline of improvements."
- **Status:** ❌ MISMATCH
- **Analysis:** Adds "safe, prioritised" emphasizing risk management and strategic ordering.

### Line 38: Stage 3 title
- **Current:** "3. Execute"
- **Target:** "3. Deploy & Document"
- **Status:** ❌ MISMATCH
- **Analysis:** Target emphasizes documentation alongside execution, showing professional maturity.

### Lines 39-41: Stage 3 description
- **Current:** "Prioritised backlog of automations to reduce tool count and staff toil."
- **Target:** "Prioritised execution with full documentation to reduce tool count and staff toil."
- **Status:** ❌ MISMATCH
- **Analysis:** Reinforces the documentation theme, shifts from "backlog" to "execution".

---

## Slide11_Commercial.svelte

### Lines 14-15: Step 1 description
- **Current:** "Use our own business as the proving ground. Document repeatable patterns."
- **Target:** "Use our own business as the proving ground. Uplift staff knowledge safely, ensuring security and data governance are solved first."
- **Status:** ❌ MISMATCH
- **Analysis:** Target emphasizes safety, security, and governance—critical for credibility. More comprehensive than just "document patterns".

### Line 23: Step 2 description
- **Current:** "Create a high-margin Professional Services offering for our 1,800 contacts."
- **Target:** "Develop a premium Professional Services offering that differentiates us from standard MSPs."
- **Status:** ❌ MISMATCH
- **Analysis:** Target removes specific numbers (1,800 contacts) and emphasizes differentiation and premium positioning over just "high-margin".

### Line 31: Step 3 description
- **Current:** "Unlock a potential ~$700k revenue stream and cement brand leadership."
- **Target:** "Cement our brand as the definitive technology leader for our customers, opening new high-margin revenue streams."
- **Status:** ❌ MISMATCH
- **Analysis:** Target removes specific dollar amount, focuses on brand positioning first, revenue second. More strategic, less transactional.

---

## Slide12_PersonalContext.svelte

### Lines 12-13: Main body text (deck-body-lg)
- **Current:** "I relocated my family to the region for the long term. I am not here for a rotation; I am here to build."
- **Target:** "I relocated my family to the region to build a long-term future here."
- **Status:** ❌ MISMATCH
- **Analysis:** Target version is more concise and professional, less emotional. Removes the defensive "not here for a rotation" statement.

### Lines 15-17: Description text
- **Current:** "Currently, my role under-utilises my experience and capability. This plan is a mechanism to deploy my full skillset—Strategic Governance and Technical Engineering—to solve your most expensive problems."
- **Target:** "My experience in high-velocity environments means I have the capacity to absorb this strategic workload in addition to my current operational duties. This plan allows the business to extract maximum value from my salary without requiring a new hire."
- **Status:** ❌ MISMATCH
- **Analysis:** Critical tone shift. Current version sounds like complaint about underutilization. Target positions it as business value—additional capacity without cost. Much stronger framing.

---

## Slide13_Mandate.svelte

### Line 15: Layer node label
- **Current:** "Program Director"
- **Target:** "Director - Programs, Automation & Modernisation"
- **Status:** ❌ MISMATCH
- **Analysis:** Full title provides clarity and authority. Shows scope of responsibility.

### Line 31: Second bullet point
- **Current:** "It provides a single point of accountability for complex outcomes."
- **Target:** "It provides a single point of accountability for complex cross-functional outcomes."
- **Status:** ❌ MISMATCH
- **Analysis:** Adds "cross-functional" to emphasize the coordination challenge.

### Line 31: First bullet point (also has difference)
- **Current:** "Business-as-usual is for *running* the business. This program is for *changing* it."
- **Target:** "Business-as-usual is for *running* the business. This mandate is for *changing* it."
- **Status:** ❌ MISMATCH
- **Analysis:** Changes "program" to "mandate", emphasizing authority and endorsement.

---

## Slide14_Catalyst.svelte

### Lines 18-21: Current Trajectory bullets
- **Current:**
  - "Growth creates complexity"
  - "Goodwill absorbs friction"
  - "Reacting to market shifts"
  - "Incremental improvements"

- **Target:**
  - "Growth outpaces structure"
  - "Reliance on individual heroics"
  - "Reacting to market shifts"
  - "Linear, incremental growth"

- **Status:** ❌ MISMATCH
- **Analysis:** Target version is more specific and paints clearer picture. "Heroics" is more vivid than "goodwill", "outpaces structure" more precise than "creates complexity".

### Lines 28-31: 90-Day Catalyst bullets
- **Current:**
  - "Structure enables scale"
  - "Systems create capacity"
  - "Defining the market for customers"
  - "Step-change in performance & revenue"

- **Target:**
  - "Governance enables scale"
  - "Systems create leverage"
  - "Leading the market conversation"
  - "Step-change in performance & revenue"

- **Status:** ❌ MISMATCH
- **Analysis:** "Governance" is more specific than "structure". "Leverage" is stronger than "capacity". "Leading the market conversation" is more powerful than "defining the market".

---

## Slide15_Charter.svelte

### Line 14: First bullet (with color styling)
- **Current:** "Director - Programs, Automation & Modernisation"
- **Target:** "Director - Programs, Automation & Modernisation" (with `style="color: var(--accent);"`)
- **Status:** ⚠️ PARTIAL MISMATCH
- **Analysis:** Target adds color styling to emphasize the title. Current doesn't have the style attribute.

### Line 15: Second bullet
- **Current:** "Assume ownership of the PMO uplift."
- **Target:** "Assume ownership of the Governance & PMO uplift."
- **Status:** ❌ MISMATCH
- **Analysis:** Target adds "Governance &" to emphasize the broader scope.

### Line 16: Third bullet (removed in target)
- **Current:** "Direct reporting line to the MD for this charter."
- **Target:** "Authority to audit and optimise internal toolchains."
- **Status:** ❌ MISMATCH
- **Analysis:** Significant change. Removes reporting line mention (could be seen as political), adds practical authority over tools.

### Line 16: Fourth bullet (new in target)
- **Current:** (doesn't exist)
- **Target:** "Direct reporting line to the MD for this strategic initiative."
- **Status:** ❌ MISMATCH
- **Analysis:** Target keeps the reporting line but reorders and changes "charter" to "strategic initiative".

---

## Summary Statistics

- **Total Files Analyzed:** 15
- **Files with Differences:** 14
- **Files Completely Matching:** 1 (None—all have at least minor differences)
- **Critical Strategic Changes:** 12
- **Minor Technical Changes:** 3

## Priority Classification

### HIGH PRIORITY (Strategic messaging changes):
1. Slide01 - Ownership attribution ("You identified")
2. Slide02 - Leadership positioning vs technical skills
3. Slide03 - Removing "Legacy" language
4. Slide04 - Reframing system issues positively
5. Slide07 - "Commercial" change control emphasis
6. Slide08 - Adding "Continuous" monitoring
7. Slide09 - Complete Kanban restructure
8. Slide11 - Removing specific numbers, emphasizing differentiation
9. Slide12 - Reframing personal value proposition
10. Slide14 - Stronger contrast language

### MEDIUM PRIORITY (Terminology refinements):
11. Slide05 - Tool terminology updates
12. Slide10 - Adding "safe, prioritised"
13. Slide13 - Full title usage

### LOW PRIORITY (Technical/formatting):
14. Slide06 - SVG coordinate adjustments
15. Slide15 - Style attribute addition

## Implementation Recommendation

All changes should be implemented as they represent carefully chosen strategic language designed for psychological impact. The wording differences shift the presentation from defensive/technical to confident/strategic, and from criticism of current state to vision for future state.

