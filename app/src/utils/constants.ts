import { EntitiesFilter } from '../models/types'

export const navbarData = [
  {
    id: 'title',
    label: 'ATC',
    style: { minWidth: 100, fontWeight: 900, fontSize: 23 }
  },
  {
    id: 'Dashboard',
    label: 'Dashboard',
    path: 'dashboard'
  },
  {
    id: 'Project',
    label: 'Projects',
    path: 'project'
  },
  {
    id: 'Entities',
    label: 'Entities',
    path: 'entities'
  },
  {
    id: 'Status',
    label: 'Status',
    path: 'status'
  },
  {
    id: 'Configuration',
    label: 'Configuration',
    path: 'configuration'
  },
  {
    id: 'Profile',
    label: 'Profile',
    style: { marginRight: 'auto' },
    path: 'profile'
  }
]

export const entitiesFilters: EntitiesFilter = {
  all: { label: 'All Entities', selected: true },
  applicant: { label: 'Applicant', selected: true },
  architect: { label: 'Architect', selected: true },
  agent: { label: 'Agent', selected: true },
  'civil engineer': { label: 'Civil Engineer', selected: true },
  planner: { label: 'Planner', selected: true },
  owner: { label: 'Owner', selected: true },
  representative: { label: 'Representative', selected: true },
  'property owner': { label: 'Property owner', selected: true },
  other: { label: 'Other', selected: true }
}

export const getAlphaList = (): string[] => {
  const alphaArray = []
  for (let index = 65; index < 91; index++) {
    alphaArray.push(String.fromCharCode(index))
  }
  return alphaArray
}

export enum TABS_ENUM {
  PROJECT = 'Project',
  DOCUMENT = 'Document',
  ENTITIES = 'Entities',
  PROPERTIES = 'Properties',
  MEETINGS = 'Meetings'
}

export const TABS = Object.values(TABS_ENUM) as string[]

export const excludeKeys: Record<string, boolean> = {
  propertyReferences: true,
  prefixCategory: true,
  suffixCategory: true,
  caseReferences: true,
  documentReferences: true,
  entityReferences: true,
  meetingReferences: true,
  base_case: true,
  _id: true,
  createdAt: true,
  updatedAt: true,
  id: true,
  __v: true,
  project_description_present_use: true,
  project_description_proposed_use: true
}

export enum NON_STANDARDIZED_FIELD_KEYS {
  BASE_CASES = 'baseCases', // ToDo take a look at this fields and validate
  // CREATED_AT = "createdAt",
  // UPDATED_AT = "updatedAt",
  // TIME_TO_INGEST = "timeToIngest",
  PREFIX_CATEGORIES = 'prefixCategories',
  SUFFIX_CATEGORIES = 'suffixCategories'
}

export const NON_STANDARDIZED_FIELD_KEYS_MAP = Object.values(
  NON_STANDARDIZED_FIELD_KEYS
).reduce((previousValue: { [key: string]: boolean }, currentValue: string) => {
  return { ...previousValue, [currentValue]: true }
}, {})

export enum StatusOptions {
  READY = 'Ready',
  QA = 'QA',
  PENDING = 'Pending'
}



export const BOOLEAN_FIELDS: Record<string, boolean> = {
  site_is_undeveloped: true,
  site_is_located_within_500_feet_of_a_freeway: true,
  proposed_project_info_accessory_use: true,
  proposed_project_info_interior_tenant_improvement: true,
  proposed_project_info_exterior_renovation: true,
  proposed_project_info_change_of_use: true,
  proposed_project_info_grading: true,
  proposed_project_info_haul_route: true,
  proposed_project_info_removal_of_any_on_site_trees: true,
  proposed_project_info_uses_or_structures_in_public_right_of_way: true,
  proposed_project_info_removal_of_any_street_tree: true,
  proposed_project_info_phased_project: true,
  public_right_of_way_have_you_submitted_to_BOE: true,
  public_right_of_way_is_your_project_required_to_dedicate_land: true,
  action_requested_does_the_project_include_multiple_approval_requests_as_per_LAMC:
      true,
  action_requested_additional_requests_attached: true,
  related_department_city_planning_cases_condition_compliance_review: true,
  related_department_city_planning_cases_clarification_of_q: true,
  related_department_city_planning_cases_modification_of_conditions: true,
  related_department_city_planning_cases_clarification_of_d: true,
  related_department_city_planning_revision_of_approved_plans: true,
  related_department_city_planning_amendment_to_t: true,
  related_department_city_planning_renewal_of_entitlement: true,
  related_department_city_planning_plan_approval_subsequent_to_master_conditional_use:
      true,
  related_department_city_planning_cases_for_purposes_of_environmental_CEQA:
      true,
  related_department_city_planning_cases_have_you_filed_a_subdivision: true,
  related_documents_referrals_are_there_recorded_covenants_or_easements: true,
  primary_contact_for_project_information_owner: true,
  primary_contact_for_project_information_applicant: true,
  primary_contact_for_project_information_agent_representative: true,
  primary_contact_for_project_information_agent_other: true,
  site_is_was_developed_with_use_that_could_release_hazardous_materials: true,
  site_has_special_designation: true,
  proposed_project_info_removal_of_protected_trees: true,
  proposed_project_info_demolition_of_existing: true
}