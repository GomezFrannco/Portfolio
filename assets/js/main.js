import { $edItem, $jobsItem } from "./dom.js";

$edItem.addEventListener("click", () => {
  $jobsItem.classList.remove("selected");
  $edItem.classList.add("selected");
});
$jobsItem.addEventListener("click", () => {
  $edItem.classList.remove("selected");
  $jobsItem.classList.add("selected");
});
