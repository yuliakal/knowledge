import { GenericPreview } from 'components';
import { getModelImages, getModelLanguage, Model, PocGiftModel } from 'lib/models';
import { LayoutActionCreators } from 'lib/store/layout';
import { Dispatch } from 'redux';
import {
  Template,
  TemplateOutput,
  TemplateRelated,
  Resource,
  StoreStateProvider,
  Imprint,
  LayoutDialogType,
  ImageSize,
} from 'lib/types';

/**
 * POC GIFT TEMPLATE TYPE
 * ---
 * Defines to which resources is template attached
 */
const PocGiftTemplateType = () => PocGiftModel.getResourceType();

/**
 * POC GIFT TEMPLATE RELATED
 * ---
 * Defines related resources required for printing template
 */
const PocGiftTemplateRelated: TemplateRelated = () => [
  Model.defaultRelationshipNames.Language,
  Model.defaultRelationshipNames.Images,
  Model.defaultRelationshipNames.Owner,
];

/**
 * POC GIFT TEMPLATE OUTPUT
 * ---
 * Generates template output
 */
const PocGiftTemplateOutput: TemplateOutput = (
  resource: Resource,
  stateProvider: StoreStateProvider,
  dispatch: Dispatch,
) => {
  // creates proper model instance
  const model = PocGiftModel.instance(resource);
  model.connectToState(stateProvider);
  // creates relations helpers
  const language = getModelLanguage(model);
  const images = getModelImages(model);
  // creates on open action callback
  const onOpen = (entity: Imprint) =>
    dispatch(LayoutActionCreators.openDialog(LayoutDialogType.Detail, entity));

  return (
    <GenericPreview
      onOpen={onOpen}
      title={language.getTitle()}
      purpose={language.getPurpose()}
      cover={images.getCover(ImageSize.LG_HDPI)}
      coloring={model.getColoring()}
      pictogram={model.getPictogram()}
      imprint={model.getImprint()}
    />
  );
};

/**
 * POC GIFT TEMPLATE
 */
const PocGiftTemplate: Template = {
  getType: PocGiftTemplateType,
  getRelated: PocGiftTemplateRelated,
  getOutput: PocGiftTemplateOutput,
};

/**
 * EXPORTS
 */
export { PocGiftTemplate };
