import { createConfiguration } from '../../../../codegen/crm/companies/configuration'
import { AssociationsApi, BasicApi, BatchApi, SearchApi } from '../../../../codegen/crm/companies/index'
import { IConfiguration } from '../../../IConfiguration'
import { BaseDiscovery } from '../../BaseDiscovery'

export class CompaniesDiscovery extends BaseDiscovery {
  public associationsApi: AssociationsApi
  public basicApi: BasicApi
  public batchApi: BatchApi
  public searchApi: SearchApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = createConfiguration(this.getParams())

    this.associationsApi = new AssociationsApi(configuration)
    this.basicApi = new BasicApi(configuration)
    this.batchApi = new BatchApi(configuration)
    this.searchApi = new SearchApi(configuration)
  }
}