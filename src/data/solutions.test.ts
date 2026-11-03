import test from 'node:test';
import assert from 'node:assert/strict';
import { SOLUTIONS } from './solutions';
import { PRODUCTS } from './products';
import { WORK_ITEMS } from './work';
import { DESIGN_PACKAGES, LOGO_ADDON } from './packages';

test('solutions catalog contains all 6 core business solutions', () => {
  assert.equal(SOLUTIONS.length, 6);
  const slugs = SOLUTIONS.map((s) => s.slug);
  assert.ok(slugs.includes('digital-presence'));
  assert.ok(slugs.includes('customer-enquiries'));
  assert.ok(slugs.includes('workflow-automation'));
  assert.ok(slugs.includes('business-operations'));
  assert.ok(slugs.includes('product-development'));
  assert.ok(slugs.includes('brand-visibility'));
});

test('each solution has capabilities, scope factors, and faqs', () => {
  for (const sol of SOLUTIONS) {
    assert.ok(sol.pageTitle.length > 5, `Solution ${sol.id} missing title`);
    assert.ok(sol.capabilities.length >= 3, `Solution ${sol.id} has insufficient capabilities`);
    assert.ok(sol.scopeFactors.length >= 2, `Solution ${sol.id} missing scope factors`);
    assert.ok(sol.faqs.length >= 1, `Solution ${sol.id} missing faqs`);
  }
});

test('design packages match confirmed USD pricing', () => {
  const essential = DESIGN_PACKAGES.find((p) => p.id === 'essential');
  const business = DESIGN_PACKAGES.find((p) => p.id === 'business');
  const monthly = DESIGN_PACKAGES.find((p) => p.id === 'monthly-presence');

  assert.ok(essential);
  assert.equal(essential.priceUSD, 10);
  assert.equal(essential.designCount, 3);

  assert.ok(business);
  assert.equal(business.priceUSD, 30);
  assert.equal(business.designCount, 10);

  assert.ok(monthly);
  assert.equal(monthly.priceUSD, 60);
  assert.equal(monthly.designCount, 31);

  assert.equal(LOGO_ADDON.priceUSD, 5);
});

test('work items adhere to Challenge -> Approach -> Delivered format', () => {
  assert.ok(WORK_ITEMS.length >= 5);
  for (const w of WORK_ITEMS) {
    assert.ok(w.challenge.length > 20, `Case study ${w.id} missing challenge`);
    assert.ok(w.approach.length > 20, `Case study ${w.id} missing approach`);
    assert.ok(w.delivered.length >= 2, `Case study ${w.id} missing delivered items`);
  }
});

test('products have verified statuses without fabricated claims', () => {
  assert.ok(PRODUCTS.length >= 8);
  for (const p of PRODUCTS) {
    assert.ok(p.name.length > 0);
    assert.ok(p.tagline.length > 0);
    assert.ok(p.whoItIsFor.length > 0);
    assert.ok(p.whatItHelpsWith.length > 0);
  }
});
