# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: purchase.spec.js >> Valid Login Test
- Location: tests\purchase.spec.js:11:1

# Error details

```
Error: locator.textContent: Error: strict mode violation: locator('//table/tbody/tr/td[2]') resolved to 2 elements:
    1) <td>Samsung galaxy s6</td> aka getByRole('cell', { name: 'Samsung galaxy s6' }).first()
    2) <td>Samsung galaxy s6</td> aka getByRole('cell', { name: 'Samsung galaxy s6' }).nth(1)

Call log:
  - waiting for locator('//table/tbody/tr/td[2]')

```

# Page snapshot

```yaml
- generic [active] [ref=f3e1]:
  - text:             
  - navigation [ref=f3e2]:
    - generic [ref=f3e3]:
      - link "PRODUCT STORE" [ref=f3e4] [cursor=pointer]:
        - /url: index.html
      - list [ref=f3e7]:
        - listitem [ref=f3e8]:
          - link "Home (current)" [ref=f3e9] [cursor=pointer]:
            - /url: index.html
            - text: Home
            - generic [ref=f3e10]: (current)
        - listitem [ref=f3e11]:
          - link "Contact" [ref=f3e12] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f3e13]:
          - link "About us" [ref=f3e14] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f3e15]:
          - link "Cart" [ref=f3e16] [cursor=pointer]:
            - /url: "#"
        - listitem
        - listitem [ref=f3e17]:
          - link "Log out" [ref=f3e18] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f3e19]:
          - link "Welcome pavanol" [ref=f3e20] [cursor=pointer]:
            - /url: "#"
        - listitem
  - generic [ref=f3e22]:
    - generic [ref=f3e23]:
      - heading "Products" [level=2] [ref=f3e24]
      - table [ref=f3e26]:
        - rowgroup [ref=f3e27]:
          - row [ref=f3e28]:
            - columnheader "Pic" [ref=f3e29]
            - columnheader "Title" [ref=f3e30]
            - columnheader "Price" [ref=f3e31]
            - columnheader "x" [ref=f3e32]
        - rowgroup [ref=f3e33]:
          - row [ref=f3e34]:
            - cell [ref=f3e35]
            - cell "Samsung galaxy s6" [ref=f3e37]
            - cell "360" [ref=f3e38]
            - cell [ref=f3e39]:
              - link "Delete" [ref=f3e40] [cursor=pointer]:
                - /url: "#"
          - row [ref=f3e41]:
            - cell [ref=f3e42]
            - cell "Samsung galaxy s6" [ref=f3e44]
            - cell "360" [ref=f3e45]
            - cell [ref=f3e46]:
              - link "Delete" [ref=f3e47] [cursor=pointer]:
                - /url: "#"
    - generic [ref=f3e48]:
      - heading "Total" [level=2] [ref=f3e49]
      - heading "720" [level=3] [ref=f3e52]
      - button "Place Order" [ref=f3e53]
  - generic [ref=f3e55]:
    - generic [ref=f3e58]:
      - heading "About Us" [level=4] [ref=f3e59]
      - paragraph [ref=f3e60]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=f3e63]:
      - heading "Get in Touch" [level=4] [ref=f3e64]
      - paragraph [ref=f3e65]: "Address: 2390 El Camino Real"
      - paragraph [ref=f3e66]: "Phone: +440 123456"
      - paragraph [ref=f3e67]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=f3e71]
  - contentinfo [ref=f3e73]:
    - paragraph [ref=f3e74]: Copyright © Product Store
```

# Test source

```ts
  1  | class BasePage
  2  | {
  3  |     constructor(page)
  4  |     {
  5  |         this.page=page
  6  |     }
  7  | 
  8  |     async navigate(url)
  9  |     {
  10 |         await this.page.goto(url)
  11 |     }
  12 |     async click(locator)
  13 |     {
  14 |         await locator.click()
  15 |     }
  16 |     async fill(locator,value)
  17 |     {
  18 |         await locator.fill(value)
  19 |     }
  20 |     async wait(locator)
  21 |     {
  22 |         await locator.waitFor({
  23 |         state: "visible"
  24 |     });
  25 |     
  26 | 
  27 |     }
  28 |     async getText(locator)
  29 |     {
> 30 |         return await locator.textContent()
     |                              ^ Error: locator.textContent: Error: strict mode violation: locator('//table/tbody/tr/td[2]') resolved to 2 elements:
  31 |     }
  32 | 
  33 | 
  34 | }
  35 | 
  36 | module.exports = { BasePage };
```