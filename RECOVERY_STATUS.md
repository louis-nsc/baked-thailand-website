# Baked Thailand Website — Recovery Report

Source: Vercel deployment `dpl_64fSVwHDa25nk6ruQoLRejnjKxAN` (team `team_58kdurEtN0KCX1MiTj4bTx8z`), fetched via `mcp__Vercel__get_deployment_file_contents` per the 82-line manifest at
`/tmp/claude-0/-home-claude/12925da4-441c-52ce-b19c-bbe4e34ccd83/scratchpad/full_manifest.txt`.

Output root: `/home/claude/baked-thailand-website`

## Summary

- **Total files processed (from manifest):** 82
- **Fully complete (not truncated by the Vercel API):** 2
  - `src/styles/global.css`
  - `src/pages/wholesale-order-received.astro`
- **Truncated (Vercel API cut off the content; recovered content is a partial-but-exact prefix of the original file, byte-for-byte up to the cut point):** 80

Note: every truncated file was saved exactly as returned by the API (decoded from the base64 prefix given), with no attempt to guess, complete, or "fix" the missing tail. Two files (`src/pages/th/is-cannabis-still-legal-2026.astro` and `src/pages/th/สุดยอดเมนูกัญชาไทยเปิด.astro`) had a small amount of additional self-truncation applied beyond what the API reported, because the tail of the manually-transcribed base64 for those two showed signs of transcription corruption (irregular repeated fragments / stray characters inconsistent with valid base64 output). In both cases the suspect tail was dropped rather than kept, and the `omitted` count below is a lower bound on the true missing-character count for those two files specifically.

Directory also contains 8 files not covered by the manifest / not written by this recovery process (found already present, untouched): `astro.config.mjs`, `package.json`, `public/robots.txt`, `src/content.config.ts`, `src/data/business.ts`, `src/data/navigation.ts`, `src/data/press.ts`, `tsconfig.json`. These are excluded from the counts above, which cover only the 82 manifest-listed files.

`find /home/claude/baked-thailand-website -type f | wc -l` → **90** (82 recovered files + 8 pre-existing files not in the manifest).

## Truncated files, worst-first by omitted base64 characters

| # | Omitted chars | File |
|---|---:|---|
| 1 | 13552 | src/pages/index.astro |
| 2 | 10032 | src/pages/cannabis-legal-thailand.astro |
| 3 | 9304 | vercel.json |
| 4 | 9200 | src/pages/th/is-cannabis-still-legal-2026.astro *(includes self-truncation, see note above)* |
| 5 | 7728 | src/components/sections/GeoPageBody.astro |
| 6 | 7544 | src/pages/th/microdose-thc-guide.astro |
| 7 | 7068 | src/pages/th/thai.astro |
| 8 | 6424 | src/data/geoPages.ts |
| 9 | 6396 | src/components/sections/VenuePageBody.astro |
| 10 | 5888 | src/data/venueTypes.ts |
| 11 | 5704 | src/pages/wholesale-thc-edibles-thailand.astro |
| 12 | 5660 | src/pages/th/headache-after-edibles.astro |
| 13 | 5548 | src/pages/th/thc-cookie-guide.astro |
| 14 | 5460 | src/components/layout/Nav.astro |
| 15 | 5352 | src/pages/th/maejo-university-sourcing.astro |
| 16 | 5148 | src/styles/design-system/styles.css |
| 17 | 4940 | src/pages/contact.astro |
| 18 | 4876 | src/pages/th/business/index.astro |
| 19 | 4700 | src/pages/where-to-buy-cannabis-brownies-in-bangkok.astro |
| 20 | 4588 | src/pages/microdosing-guide.astro |
| 21 | 4472 | src/pages/cannabis-cookies-thailand.astro |
| 22 | 4072 | src/pages/th/thc-ไมโครโดส-งานวิจัย.astro |
| 23 | 4020 | src/pages/cannabis-caramels-thailand.astro |
| 24 | 3940 | CLAUDE.md |
| 25 | 3780 | src/pages/cannabis-edibles-bangkok.astro |
| 26 | 3668 | src/components/interactive/ContactForm.tsx |
| 27 | 3660 | src/pages/thc-edibles-chiang-mai.astro |
| 28 | 3624 | src/pages/cannabis-edibles-pattaya.astro |
| 29 | 3596 | src/pages/cannabis-edibles-koh-samui.astro |
| 30 | 3564 | src/pages/cannabis-edibles-in-phuket.astro |
| 31 | 3464 | src/pages/th/ไมโครโดส-thc-ไทย.astro |
| 32 | 3368 | src/pages/th/ประโยชน์และโทษของกัญชง.astro |
| 33 | 3216 | src/pages/thc-gummies-thailand.astro |
| 34 | 2988 | src/pages/terms-and-conditions.astro |
| 35 | 2912 | src/pages/coconut-caramels-thailand.astro |
| 36 | 2796 | src/pages/th/ประโยชน์ของกัญชา-การศึก.astro |
| 37 | 2700 | src/pages/th/สุดยอดเมนูกัญชาไทยเปิด.astro *(includes self-truncation, see note above)* |
| 38 | 2672 | src/pages/privacy-policy.astro |
| 39 | 2660 | src/pages/th/กัญชาแปรรูปอะไรได้บ้าง.astro |
| 40 | 2644 | src/pages/cannabis-edibles-koh-phangan.astro |
| 41 | 2644 | src/pages/cannabis-edibles-koh-phi-phi.astro |
| 42 | 2640 | src/pages/buy-cannabis-edibles-krabi.astro |
| 43 | 2640 | src/pages/cannabis-edibles-hua-hin.astro |
| 44 | 2640 | src/pages/cannabis-edibles-koh-chang.astro |
| 45 | 2640 | src/pages/cannabis-edibles-koh-lanta.astro |
| 46 | 2640 | src/pages/cannabis-edibles-koh-tao.astro |
| 47 | 2544 | src/pages/th/แนวโน้มและนวัตกรรมการท.astro |
| 48 | 2500 | src/pages/th/ประโยชน์ของช็อกโกแลตกั.astro |
| 49 | 2448 | src/components/layout/Footer.astro |
| 50 | 2368 | src/pages/th/อาหารผสมกัญชาคืออะไร.astro |
| 51 | 1704 | src/pages/th/business/markets-and-supermarkets.astro |
| 52 | 1700 | src/pages/th/business/ice-cream-and-gelato.astro |
| 53 | 1688 | src/pages/th/business/event-venues.astro |
| 54 | 1688 | src/pages/th/business/restaurants.astro |
| 55 | 1680 | src/pages/th/business/cafes.astro |
| 56 | 1676 | src/pages/th/business/bars.astro |
| 57 | 1600 | src/components/patterns/StockistList.astro |
| 58 | 1172 | src/pages/blog/index.astro |
| 59 | 1168 | src/pages/thca-vs-thc.astro |
| 60 | 1152 | src/pages/microdose-edibles-legal-in-thailand.astro |
| 61 | 1024 | src/pages/how-long-do-edibles-take-to-kick-in-2.astro |
| 62 | 1016 | src/pages/thc-edibles-vs-cbd-edibles-in-thailand.astro |
| 63 | 976 | src/components/patterns/FloatingOrderWidget.astro |
| 64 | 916 | src/components/interactive/ContactForm.css |
| 65 | 884 | src/pages/buy-thc-edibles-thailand.astro |
| 66 | 844 | src/pages/thc-edibles-beginners-guide.astro |
| 67 | 836 | src/pages/how-can-i-improve-my-high.astro |
| 68 | 828 | src/components/patterns/FeaturedIn.astro |
| 69 | 808 | src/pages/cannabis-edibles-dosage-thailand.astro |
| 70 | 796 | src/pages/why-edibles-give-me-a-headache.astro |
| 71 | 788 | src/pages/why-are-stoners-so-chill.astro |
| 72 | 780 | src/pages/what-happens-if-you-take-too-much-thc.astro |
| 73 | 776 | src/pages/1mg-thc-edible.astro |
| 74 | 772 | src/pages/smoking-hemp-is-risky-enjoy-limitless-cannabis-edibles-benefits.astro |
| 75 | 760 | src/pages/api/contact.ts |
| 76 | 724 | src/components/sections/ArticleBody.astro |
| 77 | 696 | src/pages/edibles-vs-smoking-vs-vaping.astro |
| 78 | 668 | src/pages/what-are-edibles-like.astro |
| 79 | 540 | src/pages/mr-miyagi-edibles-thailand.astro |
| 80 | 180 | src/layouts/BaseLayout.astro |

## Complete (not truncated) files

- `src/styles/global.css` (169 bytes)
- `src/pages/wholesale-order-received.astro` (1250 bytes)

Full machine-readable log: `/tmp/claude-0/-home-claude/12925da4-441c-52ce-b19c-bbe4e34ccd83/scratchpad/recovery_log.jsonl`
