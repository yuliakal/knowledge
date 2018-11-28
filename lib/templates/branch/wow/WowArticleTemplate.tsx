import { GenericPreview } from 'components';
import { getModelImages, getModelLanguage, Model, WowArticleModel } from 'lib/models';
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
 * WOW ARTICLE TEMPLATE TYPE
 * ---
 * Defines to which resources is template attached
 */
const WowArticleTemplateType = () => WowArticleModel.getResourceType();

/**
 * WOW ARTICLE TEMPLATE RELATED
 * ---
 * Defines related resources required for printing template
 */
const WowArticleTemplateRelated: TemplateRelated = () => [
  Model.defaultRelationshipNames.Language,
  Model.defaultRelationshipNames.Images,
  Model.defaultRelationshipNames.Owner,
];

/**
 * WOW ARTICLE TEMPLATE OUTPUT
 * ---
 * Generates template output
 */
const WowArticleTemplateOutput: TemplateOutput = (
  resource: Resource,
  stateProvider: StoreStateProvider,
  dispatch: Dispatch,
) => {
  // creates proper model instance
  const model = WowArticleModel.instance(resource);
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
 * WOW ARTICLE TEMPLATE
 */
const WowArticleTemplate: Template = {
  getType: WowArticleTemplateType,
  getRelated: WowArticleTemplateRelated,
  getOutput: WowArticleTemplateOutput,
};

/**
 * EXPORTS
 */
export { WowArticleTemplate };
