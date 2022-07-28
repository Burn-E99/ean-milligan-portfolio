interface BaseStruct {
	id: string;
	url?: string;
	name: string;
	startDate: string;
	endDate: string;
}

export interface Project extends BaseStruct {
	details: string[];
	skills: string[]
}

export interface Company extends BaseStruct {
	title: string;
	projects: Project[];
}

export interface Education extends BaseStruct {
	major: string;
	minor: string;
}

export interface Skill {
  id: string;
	type: 'lang' | 'lib' | 'tool' | 'os' | 'other';
  name: string;
	tooltip?: string;
	expLevel: number;
	yearsExp: number;
	projects: string[];
}
