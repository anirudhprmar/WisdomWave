import { useThemeStore } from "../../store/useThemeStore";

function Accordion({question,answer}) {
  
  const {theme} = useThemeStore();
  return (
    <div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className={theme === 'light' ? "collapse-title font-semibold text-gray-700" : "collapse-title font-semibold"}>{question}</div>
  <div className={theme === 'light' ? "collapse-content text-sm text-gray-700" : "collapse-content text-sm"}>{answer}</div>
</div>
    </div>
  )
}

export default Accordion
