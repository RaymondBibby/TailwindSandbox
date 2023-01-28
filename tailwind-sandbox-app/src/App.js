import './input.css';
import Cards from './components/cards';

function App({ root }) {
	const name = 'Ray';
	const element = <h1>Hello, {name}!</h1>;
	return (
		<>
			<body>
				<div class="min-h-screen bg-[url('https://as1.ftcdn.net/v2/jpg/02/84/11/36/1000_F_284113609_luDZ0H3UrlYTXu4n6FwK3F7sYHR9sKjU.jpg')]">
					<h1 class="border-t-8 pt-6 pb-8 hover:bg-sky-700 text-5xl text-rose-300 text-center items-center font-bold rounded-xl">
						{element}
					</h1>
					<content class="pr-12 pl-12 flex justify-center flex-col items-center">
						<p class="w-3/4 pr-12 pl-12 bg-slate-50 rounded-xl p-2">
							Eiusmod veniam magna aliquip amet commodo in voluptate
							aliquip ad laboris deserunt consequat officia elit. Labore
							qui commodo culpa eiusmod laborum laboris tempor. In
							consequat ad in proident commodo reprehenderit deserunt
							voluptate adipisicing aute adipisicing ut. Nulla tempor
							consectetur qui laboris est ut ut amet culpa id.
							Exercitation officia fugiat laboris nostrud laborum non
							laboris id. Dolor laborum deserunt nostrud velit culpa
							Lorem consequat amet elit veniam sit ad aliqua ea. Ad magna
							magna laborum ullamco adipisicing id pariatur do ut anim
							magna.
						</p>
						<div class="flex justify-center grid grid-cols-3 ">
							<Cards />
						</div>
					</content>
				</div>
			</body>
		</>
	);
}

export default App;
