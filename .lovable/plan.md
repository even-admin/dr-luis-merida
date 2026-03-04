

## Fix: Calendar iframe cuts off when switching tabs

### Root cause
The resize `message` listener uses `document.querySelector('iframe[src*="leadconnectorhq.com"]')` which only finds the **first** matching iframe (the Faro one). When the user switches to the Star Médica tab, the resize message targets the wrong iframe — or the newly-visible iframe never gets resized because it was hidden (unmounted by Radix Tabs) and re-mounted without triggering a new resize event.

Additionally, Radix `TabsContent` unmounts inactive content by default, so switching tabs remounts the iframe from scratch — it loads fresh but the resize message may have already fired while it was hidden.

### Fix

**1. Keep both iframes mounted** — add `forceMount` to both `TabsContent` components and use CSS to hide the inactive one (`hidden` class when not active). This prevents re-loading the iframe every time the user switches tabs and preserves the resize state.

**2. Fix the resize listener to target ALL iframes** — change `querySelector` to `querySelectorAll` and update height on all matching iframes, so whichever is visible will have the correct height.

**3. Use controlled Tabs with state** — track the active tab in React state, and use that to toggle visibility classes on the `TabsContent` wrappers instead of relying on Radix's mount/unmount behavior.

### Changes in `src/components/LocationsSection.tsx`
- Import `useState`
- Add `const [activeTab, setActiveTab] = useState("faro")`
- Make `Tabs` controlled: `value={activeTab} onValueChange={setActiveTab}`
- Both `TabsContent` get `forceMount` prop
- Wrap each iframe in a div that toggles `className={activeTab === "faro" ? "" : "hidden"}`
- Change `querySelector` → `querySelectorAll` in the resize handler and loop over all matching iframes

