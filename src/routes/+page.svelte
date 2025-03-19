<script>
	import { Button } from "svelte-elegant";
  
	let shSqnc = "hidden";
	let shTxtAr = "hidden";
	let redy = false;
	let cntChr = 3;
	let sqnc = "";
	let inputStr = "";
	let isError = 0;
  
	function toGenerate() {
	  sqnc = "";
  
	  for (let i = 0; i < cntChr; i++) {
		let rnd = Math.floor(Math.random() * 9) + 1;
		//sqnc += rnd + " ";
		sqnc += rnd;
	  }
  
	  //sqnc = sqnc.slice(0, -1);
	}
  
	function toVsbl() {
	  toGenerate();
	  shSqnc = "visible";
	  setTimeout(() => {
		shSqnc = "hidden";
	  }, 1750);
	}
  </script>
  
  <div style:margin="1rem">
	<p>Are you ready to play?</p>
	<div class="mgn-top">
	  <Button
		width="11rem"
		onclick={() => {
		  shTxtAr = "visible";
		  if (!redy) toVsbl();
		  redy = true;
		}}>Ready to Go!</Button
	  >
	</div>
	<div class="mgn-top" id="sqnc">
	  <p style:visibility={shSqnc}>Remember the sequence of numbers:</p>
	  <p
		style:visibility={shSqnc}
		style:color={isError ? "red" : "green"}
		style:margin-top="0.75rem"
	  >
		{sqnc}
	  </p>
	</div>
	<div class="mgn-top">
	  <textarea
		bind:value={inputStr}
		style:visibility={shTxtAr}
		style:border="1px solid #d7d7d7"
		style:outline="none"
		style:border-radius="0.25rem"
		style:width="20rem"
		style:height="20rem"
		style:padding="0.66rem"
		style:margin-top="4rem"
		style:font-size="16px"
	  >
	  </textarea>
	</div>
	<div class="mgn-top" style:visibility={shTxtAr}>
	  <Button
		width="11rem"
		onclick={() => {
		  if (inputStr === sqnc) {
			cntChr++;
			isError = 0;
		  } else {
			cntChr--;
			isError = 1;
		  }
		  toVsbl();
		  inputStr = "";
		}}>Check Result</Button
	  >
	</div>
  </div>
  
  <style>
	.mgn-top {
	  margin-top: 1rem;
	}
  
	#sqnc {
	  position: absolute;
	}
  </style>
  