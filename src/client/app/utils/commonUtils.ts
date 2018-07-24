
export const sortByProjects = (data: Object) => {
	for (const project in data) {
			if (data[project].length === 0) {
						delete data[project];
				} else {
						data[project] = data[project].map(it => {
							if (isValidJSON(it)) return JSON.parse(it);
							return it;
						});
				}
	}
	return data;
};

export const isValidJSON = (obj) => {
	try {
		JSON.parse(obj);
		return true;
	} catch (e) {
		return false;
	}
};

export const onAuthGitLab = (serviceName: string) => {
	const authLink = `/callback/authgitlab/${ serviceName }`;
	const popupWidth = 500;
	const popupHeight = 400;
	const xPosition = (window.innerWidth - popupWidth) / 2;
	const yPosition = (window.innerHeight - popupHeight) / 2;
	const authWindowParams = `width=${ popupWidth }, height=${ popupHeight }, left=${ xPosition }, top=${ yPosition }`;

	window.open(authLink, 'LoginWindow', `location=1, scrollbars=1, ${ authWindowParams }`);
};

export const pickBy = (obj, fn) =>
Object.keys(obj)
	.filter(k => fn(obj[k], k))
		.reduce((acc, key) => ((acc[key] = obj[key]), acc), {});
