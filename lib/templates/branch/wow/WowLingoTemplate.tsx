import { GenericPreview } from 'components';
import { getModelImages, getModelLanguage, Model, WowLingoModel } from 'lib/models';
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
 * WOW LINGO TEMPLATE TYPE
 * ---
 * Defines to which resources is template attached
 */
const WowLingoTemplateType = () => WowLingoModel.getResourceType();

/**
 * WOW LINGO TEMPLATE RELATED
 * ---
 * Defines related resources required for printing template
 */
const WowLingoTemplateRelated: TemplateRelated = () => [
  Model.defaultRelationshipNames.Language,
  Model.defaultRelationshipNames.Images,
  Model.defaultRelationshipNames.Owner,
];

/**
 * WOW LINGO TEMPLATE OUTPUT
 * ---
 * Generates template output
 */
const WowLingoTemplateOutput: TemplateOutput = (
  resource: Resource,
  stateProvider: StoreStateProvider,
  dispatch: Dispatch,
) => {
  // creates proper model instance
  const model = WowLingoModel.instance(resource);
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
 * WOW LINGO TEMPLATE
 */
const WowLingoTemplate: Template = {
  getType: WowLingoTemplateType,
  getRelated: WowLingoTemplateRelated,
  getOutput: WowLingoTemplateOutput,
};

/**
 * EXPORTS
 */
export { WowLingoTemplate };
