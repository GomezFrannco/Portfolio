import { $edItem, $jobsItem } from "./dom.js";

$edItem.addEventListener("click", () => {
  $jobsItem.classList.remove("active");
  $edItem.classList.add("active");
});
$jobsItem.addEventListener("click", () => {
  $edItem.classList.remove("active");
  $jobsItem.classList.add("active");
});
