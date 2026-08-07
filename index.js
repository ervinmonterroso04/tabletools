/**
 * A wizard can cast a spell if they have the spell prepared.
 * They can also cast it from a scroll even if it is not prepared.
 * @param {boolean} isSpellPrepared - whether the spell is prepared
 * @param {boolean} hasScroll - whether the wizard has a scroll of the spell
 * @returns {boolean} whether the wizard can cast the spell
 */
function canCastSpell(isSpellPrepared, hasScroll) {
  // TODO
  return isSpellPrepared || hasScroll;
}

/**
 * A creature is hidden from an observer if it is actively hiding
 * or if the observer is not aware of it.
 * @param {boolean} hiding - whether the creature is actively hiding
 * @param {boolean} aware - whether the observer is aware of the creature
 * @returns {boolean} whether the creature is hidden from the observer
 */
function isHidden(hiding, aware) {
  // TODO
  return hiding || !aware;
}

/**
 * A strike hits if the attack value is greater than or equal
 * to the target's armor class (AC).
 * @param {number} attack - the attack value
 * @param {number} ac - the armor class to beat
 * @returns {boolean} whether the strike hits
 */
function doesStrikeHit(attack, ac) {
  // TODO
  return attack >= ac;
}

/**
 * A strike is a critical hit if the attack value is at least
 * 10 greater than the target's armor class (AC).
 * @param {number} attack - the attack value
 * @param {number} ac - the armor class to beat
 * @returns {boolean} whether the strike is a critical hit
 */
function doesStrikeCrit(attack, ac) {
  // TODO
  return attack >= ac + 10;
}

/**
 * A creature can restore hit points (HP) by healing,
 * but its total HP cannot exceed its maximum HP.
 * @param {number} maxHp - maximum hit points
 * @param {number} currentHp - current hit points
 * @param {number} healAmount - amount to heal
 * @returns {number} total hit points after healing
 */
function heal(maxHp, currentHp, healAmount) {
  // TODO
}

/**
 * When a character uses a skill they have proficiency in,
 * they get to add a bonus to their attempt.
 *
 * | Rank       | Bonus     |
 * | ---        | ---       |
 * | untrained  | 0         |
 * | trained    | level + 2 |
 * | expert     | level + 4 |
 * | master     | level + 6 |
 * | legendary  | level + 8 |
 *
 * @param {number} level - level of the character
 * @param {string} rank - character's proficiency rank
 * @returns {number} the character's proficiency bonus
 */
function getProficiencyBonus(level, rank) {
  // TODO
}

/**
 * A creature can get a bonus to its armor class (AC) by taking cover.
 * If the creature is behind an obstacle, it gets a +2 bonus to its AC,
 * unless the creature is actively taking cover, in which case it gets
 * a +4 bonus to its AC.
 * A creature that is not behind an obstacle gets no bonus to its AC.
 * @param {boolean} behindObstacle - whether the creature is behind an obstacle
 * @param {boolean} takingCover - whether the creature is actively taking cover
 * @returns {number} the cover bonus to AC
 */
function getCoverBonus(behindObstacle, takingCover) {
  // TODO
}

/**
 * A creature's current hit points (HP) is reduced by taking damage.
 * If the damage taken is greater than or equal to double its maximum
 * HP, the creature dies instantly.
 * A creature's HP cannot go below 0 unless it is dead.
 * @param {number} maxHp - maximum hit points
 * @param {number} currentHp - current hit points
 * @param {number} damage - damage taken
 * @returns {number} -1 if the creature dies instantly
 * @returns {number} 0 if the creature's HP drops to 0 or below
 * @returns {number} the creature's remaining HP after taking damage
 */
function getRemainingHp(maxHp, currentHp, damage) {
  // TODO
}

/**
 * All creatures can see in bright light.
 * Creatures with low-light vision can also see in dim light.
 * Creatures with darkvision can see in all light conditions.
 * @param {string} light - light condition: "bright", "dim", or "dark"
 * @param {string} vision - vision type: "average", "low-light", or "dark"
 * @returns {boolean} whether the creature can see
 */
function canSee(light, vision) {
  // TODO
}

/**
 * A strike deals damage if it hits, unless the strike is a critical hit,
 * in which case it deals double damage.
 * If the strike does not hit, it deals 0 damage.
 * Hint: you can use the functions you wrote above :)
 * @param {number} attack - the attack value
 * @param {number} ac - the armor class to beat
 * @param {number} damage - damage on a normal hit
 * @returns {number} damage dealt by the strike
 */
function getStrikeDamage(attack, ac, damage) {
  // TODO
}

function assertEqual(actual, expected, description) {
  if (actual === expected) {
    console.log(`✅ PASS: ${description}`);
  } else {
    console.log(`❌ FAIL: ${description}`);
    console.log(`   Expected: ${expected}`);
    console.log(`   Actual:   ${actual}`);
  }
}

console.log("--- canCastSpell ---");
assertEqual(canCastSpell(true, false), true, "prepared spell can be cast");
assertEqual(
  canCastSpell(false, true),
  true,
  "unprepared spell can be cast from a scroll",
);
assertEqual(
  canCastSpell(false, false),
  false,
  "unprepared spell without a scroll cannot be cast",
);

console.log("--- isHidden ---");
assertEqual(isHidden(true, true), true, "actively hiding creature is hidden");
assertEqual(
  isHidden(false, false),
  true,
  "creature is hidden when observer is unaware",
);
assertEqual(
  isHidden(false, true),
  false,
  "creature is not hidden when not hiding and observer is aware",
);

console.log("--- doesStrikeHit ---");
assertEqual(doesStrikeHit(15, 15), true, "attack equal to AC hits");
assertEqual(doesStrikeHit(18, 15), true, "attack greater than AC hits");
assertEqual(doesStrikeHit(14, 15), false, "attack less than AC misses");

console.log("--- doesStrikeCrit ---");
assertEqual(
  doesStrikeCrit(25, 15),
  true,
  "attack 10 greater than AC is a crit",
);
assertEqual(
  doesStrikeCrit(26, 15),
  true,
  "attack more than 10 greater than AC is a crit",
);
assertEqual(
  doesStrikeCrit(24, 15),
  false,
  "attack less than 10 greater than AC is not a crit",
);

console.log("--- heal ---");
assertEqual(heal(20, 10, 5), 15, "healing increases current HP");
assertEqual(heal(20, 18, 5), 20, "healing cannot exceed max HP");
assertEqual(heal(20, 20, 5), 20, "healing at full HP stays at max HP");

console.log("--- getProficiencyBonus ---");
assertEqual(getProficiencyBonus(5, "untrained"), 0, "untrained bonus is 0");
assertEqual(getProficiencyBonus(5, "trained"), 7, "trained bonus is level + 2");
assertEqual(
  getProficiencyBonus(5, "legendary"),
  13,
  "legendary bonus is level + 8",
);

console.log("--- getCoverBonus ---");
assertEqual(getCoverBonus(true, false), 2, "behind an obstacle gives +2");
assertEqual(
  getCoverBonus(true, true),
  4,
  "taking cover behind an obstacle gives +4",
);
assertEqual(
  getCoverBonus(false, false),
  0,
  "not behind an obstacle gives no bonus",
);

console.log("--- getRemainingHp ---");
assertEqual(getRemainingHp(20, 15, 5), 10, "damage reduces current HP");
assertEqual(
  getRemainingHp(20, 10, 15),
  0,
  "HP drops to 0 when damage exceeds current HP",
);
assertEqual(
  getRemainingHp(20, 20, 40),
  -1,
  "damage of double max HP kills instantly",
);

console.log("--- canSee ---");
assertEqual(
  canSee("bright", "average"),
  true,
  "average vision can see in bright light",
);
assertEqual(
  canSee("dim", "low-light"),
  true,
  "low-light vision can see in dim light",
);
assertEqual(canSee("dark", "dark"), true, "darkvision can see in dark");

console.log("--- getStrikeDamage ---");
assertEqual(getStrikeDamage(14, 15, 8), 0, "miss deals 0 damage");
assertEqual(getStrikeDamage(15, 15, 8), 8, "hit deals normal damage");
assertEqual(getStrikeDamage(25, 15, 8), 16, "crit deals double damage");
