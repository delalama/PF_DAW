/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RenderedGifComponent } from './rendered-gif.component';

describe('RenderedGifComponent', () => {
  let component: RenderedGifComponent;
  let fixture: ComponentFixture<RenderedGifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderedGifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderedGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
