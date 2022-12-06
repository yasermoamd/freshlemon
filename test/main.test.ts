import { assertEquals } from 'https://deno.land/std@0.167.0/testing/asserts.ts';

// Compact form: name and function
Deno.test('The test runner should work.', () => {
	const x = 1 + 2;
	assertEquals(x, 3);
});